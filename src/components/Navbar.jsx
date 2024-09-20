import { useState } from "react";
import { links } from "./links";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleClickToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className={`fixed w-full z-[99999] flex flex-col items-start bg-zinc-950 px-10 py-6`}>
            <div className="flex justify-between w-full ">
                <img src="/Logo Web.svg" alt="logo" className="w-14 h-14" />
                <button onClick={handleClickToggle} className="lg:hidden">
                    <FaBars size={30} color="white" />
                </button>
                <ul className={`lg:flex hidden flex-row gap-10 mt-4`}>
                    {links.map(({ id, url, text }) => (
                        <li key={id} className="text-white">
                            <a href={url}>
                                <h1 className="">{text}</h1>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {toggle && (
                <ul className={`flex lg:hidden flex-col gap-2 mt-4`}>
                    {links.map(({ id, url, text }) => (
                        <li key={id} className="text-white">
                            <a href={url}>
                                <h1 className="">{text}</h1>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

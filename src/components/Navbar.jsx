
import { links } from "./links"

export default function Navbar() {

    return (
        <nav className="fixed w-full z-[99999] flex justify-between bg-zinc-950 px-10 py-6">
            <img src="" alt="" className="" />
            <ul className="flex flex-row gap-10">
                {links.map(({ id, url, text }) => (
                    <li key={id} className="text-white">
                        <a href={url}>
                            <h1 className="">{text}</h1>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
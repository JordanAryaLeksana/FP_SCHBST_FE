import { useState } from "react";
import axios from "axios";
import { GiArtificialHive } from "react-icons/gi";

const CeysaAI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [prompt, setPrompt] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Prompt tidak boleh kosong");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/api/generate/generate-text', {
        prompt: prompt
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Gagal mengambil data");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen min-h-screen flex flex-col justify-center items-center bg-black">
      <div className="flex md:flex-row flex-col px-5 items-center justify-center gap-5">
        <h1 className="text-white text-7xl font-bold order-2">CEYSA AI</h1>
        <GiArtificialHive size={100} color="yellow" className="mt-3 order-1" />
      </div>
      <form
        className="text-white mt-5 flex flex-col gap-5 px-5 text-center w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {loading && <p>Loading...</p>}
        {data && (
          <div className="w-full mx-auto p-5 bg-white rounded-lg shadow-lg">
            <p className="text-black break-words">{data}</p>
          </div>
        )}
        <div className="flex flex-row justify-center items-center bg-gray-950 p-2 rounded-lg">
          <input
            type="text"
            className="flex-1 bg-slate-100 text-black p-2 rounded-l-lg"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Masukkan prompt Anda di sini..."
          />
          <button
            type="submit"
            className="w-40 h-10 rounded-r-lg text-center flex items-center justify-center p-2 bg-slate-600 hover:bg-slate-700 transition"
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default CeysaAI;

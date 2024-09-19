


function App() {
  return (
    <section className="min-h-screen bg-black">
      <div className="relative md:h-[900px] md:[640px]  w-full">
        <div className="md:w-3/4 w-full absolute top-[20%] md:top-[30%] px-10 md:px-20 ">
          <h1 className="font-Poppins font-semibold text-white lg:text-[80px] md:text-5xl text-3xl leading-[1.2em] mb-3 ">
            ARTIFICIAL INTELEGIENT
          </h1>
          <p className="font-Poppins text-white ">
            proses simulasi kecerdasan manusia oleh mesin, khususnya sistem komputer. Proses ini meliputi pembelajaran, penalaran, pemecahan masalah, persepsi, pemahaman bahasa, dan pengambilan keputusan.
          </p>
        </div>
        <video width="300" autoPlay muted loop className="w-full h-[80%] opacity-25 object-cover  ">
          <source src="/WebBST_Home.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative md:h-screen h-[640px]  w-full ">
        <div className="pt-20 flex flex-col justify-center items-start w-full px-10 md:px-0 md:w-1/2 gap-4 mx-auto">
          <h1 className="text-white font-Poppins font-bold text-3xl">
            APA ITU AI?
          </h1>
          <p className="text-white font-Inter text-lg">
            Kecerdasan Buatan (AI) adalah proses simulasi kecerdasan manusia oleh sistem komputer, yang mencakup berbagai aspek. AI terbagi menjadi dua kategori:
            AI Terbatas, yang dirancang untuk melakukan tugas-tugas tertentu seperti asisten suara (contohnya, Siri atau Alexa), dan AI Umum, yang merupakan konsep teoretis di mana mesin dapat melakukan berbagai tugas intelektual layaknya manusia.
            Beberapa komponen utama AI termasuk pembelajaran mesin, yang memungkinkan sistem untuk belajar dari data dan berkembang seiring waktu, serta pembelajaran mendalam yang menggunakan jaringan saraf bertingkat untuk analisis data yang lebih kompleks.
          </p>
        </div>
      </div>
      <div className=" relative lg:h-[900px] h-full  w-full">
        <div className="pt-20  flex flex-col justify-center items-center">
          <h1 className="text-white font-Poppins font-bold text-3xl px-10 md:px-0 md:text-5xl mb-3">
            Bagaimana Cara Kerja AI ?
          </h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-5 place-content-center">
            <div className="bg-zinc-950 p-4 w-48 border-b-2 border-yellow-500 rounded-2xl text-white transition-all ease-in-out duration-300 " >
              <h1 className="font-bold mb-3">Pengumpulan Data </h1>
              <p >AI memerlukan data, seperti teks, gambar, atau suara, untuk belajar. Kualitas data sangat penting.</p>
            </div>
            <div className="bg-zinc-950 w-48 p-4 border-b-2 rounded-2xl border-yellow-500 text-white transition-all ease-in-out duration-300" >
              <h1 className="font-bold mb-3">Pra-pemrosesan Data</h1>
              <p>Data yang dikumpulkan perlu dibersihkan dan diproses agar siap digunakan, termasuk menghapus informasi yang tidak relevan </p>
            </div>
            <div className="bg-zinc-950 w-48 p-4 text-white rounded-2xl border-b-2 border-yellow-500 trasition-all ease-in-out duration-300 ">
              <h1 className="mb-3 font-bold">Pembelajaran Mesin</h1>
              <li>Supervised Learning: Belajar dari data yang sudah dilabeli.</li>
              <li>Unsupervised Learning: Mencari pola tanpa label.</li>
              <li>Reinforcement Learning: Belajar melalui percobaan dan kesalahan.</li>
            </div>
            <div className="bg-zinc-950 w-48 p-4 border-b-2 rounded-2xl border-yellow-500 text-white transition-all ease-in-out duration-300" >
              <h1 className="font-bold mb-3">Pembuatan Model</h1>
              <p>Model AI dibuat berdasarkan data yang dipelajari dan digunakan untuk membuat prediksi atau keputusan.</p>
            </div>
            <div className="bg-zinc-950 w-48 p-4 border-b-2 rounded-2xl border-yellow-500 text-white transition-all ease-in-out duration-300" >
              <h1 className="font-bold mb-3">Evaluasi Model</h1>
              <p>Model diuji dengan data baru untuk melihat seberapa akurat hasilnya. Jika perlu, model dapat diperbaiki.</p>
            </div>
            <div className="bg-zinc-950 w-48 p-4 border-b-2 rounded-2xl border-yellow-500 text-white transition-all ease-in-out duration-300" >
              <h1 className="font-bold mb-3">Implementasi</h1>
              <p>Model yang sudah siap digunakan diterapkan dalam aplikasi nyata, seperti chatbot atau sistem rekomendasi.</p>
            </div>
            <div className="mb-10 bg-zinc-950 w-48 p-4 border-b-2 rounded-2xl border-yellow-500 text-white transition-all ease-in-out duration-300" >
              <h1 className="font-bold mb-3">Pembelajaran Berkelanjutan</h1>
              <p>AI terus belajar dari data baru untuk meningkatkan kinerjanya seiring waktu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App

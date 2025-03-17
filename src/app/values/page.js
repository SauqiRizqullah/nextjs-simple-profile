import Image from "next/image";

export default function Values() {
  return (
    <div>
      {/* Latar Belakang */}
      <div className="flex flex-col bg-gradient-to-b from-blue-950 to-purple-700">
        {/* Judul */}
        <div className="poppins font-semibold text-center text-slate-50 pt-20 pb-12 text-xl italic">
          <span>VALUES</span>
        </div>
        {/* Isi */}
        <div className="poppins text-center leading-7 text-slate-50 md:px-72 px-20 pb-8">
          <span>
            A lot of values that I concerned about. But in this section, I want
            to share what values are most important according to me.
          </span>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8200DB"
          fill-opacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 pt-8 gap-4">
        {/* GAMBAR & MEMBACA */}
        <div className="md:col-span-7 row-span-2 text-center">
          <div className="flex flex-col justify-center">
            {/* Gambar */}
            <div className="flex justify-center pb-2.5">
              <Image
                src="/img/book.png"
                alt="BOOK"
                width={150}
                height={150}
                className=" p-5"
              />
            </div>
            {/* Judul */}
            <div className="poppins font-semibold text-xl">
              <span>READING</span>
            </div>
          </div>
        </div>

        {/* KONTEN READING */}
        <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">
          <span>
            Reading will broadens horizons and enchances critical thinking.
            With good literacy, we can understand information better and improve communication skills
          </span>
        </div>
      </div>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#8200db"></stop>
            <stop offset="95%" stop-color="#ffffff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,150 C 205.71428571428572,192.85714285714286 822.8571428571429,171.42857142857144 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>

      {/* PERSISTENCE */}
      <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4 bg-gradient-to-b from-purple-700 to-pink-800">
        <div className="md:col-span-7 row-span-2 text-center">
          <div className="flex flex-col justify-center">
            {/* Gambar */}
            <div className="flex justify-center pb-2.5">
              <div className="rounded-full bg-slate-50 p-3 border-4 border-purple-500">
                <Image
                  src="/img/struggle.png"
                  alt="PERSISTENCE"
                  width={150}
                  height={150}
                  className="p-5"
                />
              </div>
            </div>
            {/* Judul */}
            <div className="poppins font-semibold text-xl text-slate-50">
              <span>PERSISTENCE</span>
            </div>
          </div>
        </div>

        {/* Konten Persistence */}
        <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6 text-slate-50">
          <span>
          Persistence is the ability to keep striving despite facing obstacles. 
          This attitude is essential for achieving long-term goals and demonstrates dedication to the learning process.
          </span>
        </div>
      </div>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 130 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,150 C 113.46411483253587,115.55023923444975 226.92822966507174,81.10047846889951 309,83 C 391.07177033492826,84.89952153110049 441.7511961722488,123.14832535885168 525,158 C 608.2488038277512,192.85167464114832 724.0669856459331,224.3062200956938 845,212 C 965.9330143540669,199.6937799043062 1091.9808612440193,143.6267942583732 1192,126 C 1292.0191387559807,108.37320574162679 1366.0095693779904,129.1866028708134 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#A3004C"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      {/* 3RD */}

      <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 pt-8 gap-4">
        {/* GAMBAR & CONFIDENCE */}
        <div className="md:col-span-7 row-span-2 text-center">
          <div className="flex flex-col justify-center">
            {/* Gambar */}
            <div className="flex justify-center pb-2.5">
              <Image
                src="/img/confidence.png"
                alt="CONFIDENCE"
                width={150}
                height={150}
                className=" p-5"
              />
            </div>
            {/* Judul */}
            <div className="poppins font-semibold text-xl">
              <span>CONFIDENCE</span>
            </div>
          </div>
        </div>

        {/* KONTEN CONFIDENCE */}
        <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">
          <span>
          Self-confidence allows a person to recognize their strengths and weaknesses, enabling them to interact effectively with their environment. 
          High self-confidence also plays a role in adaptability to various situations.
          </span>
        </div>
      </div>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="5%" stop-color="#8200db"></stop>
            <stop offset="95%" stop-color="#ffffff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 L 0,150 C 205.71428571428572,192.85714285714286 822.8571428571429,171.42857142857144 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>

      {/* LOVE TO LEARN */}
      <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4 bg-gradient-to-b from-purple-700 to-pink-800">
        <div className="md:col-span-7 row-span-2 text-center">
          <div className="flex flex-col justify-center">
            {/* Gambar */}
            <div className="flex justify-center pb-2.5">
              <div className="rounded-full bg-slate-50 p-3 border-4 border-purple-500">
                <Image
                  src="/img/deep-learning.png"
                  alt="LEARNING"
                  width={150}
                  height={150}
                  className="p-5"
                />
              </div>
            </div>
            {/* Judul */}
            <div className="poppins font-semibold text-xl text-slate-50">
              <span>LOVE TO LEARN</span>
            </div>
          </div>
        </div>

        {/* Konten Persistence */}
        <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6 text-slate-50">
          <span>
          Seeing learning as an opportunity, not a punishment, fosters curiosity and innovation. 
          This mindset makes the learning process more enjoyable and effective.
          </span>
        </div>
      </div>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 130 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,150 C 113.46411483253587,115.55023923444975 226.92822966507174,81.10047846889951 309,83 C 391.07177033492826,84.89952153110049 441.7511961722488,123.14832535885168 525,158 C 608.2488038277512,192.85167464114832 724.0669856459331,224.3062200956938 845,212 C 965.9330143540669,199.6937799043062 1091.9808612440193,143.6267942583732 1192,126 C 1292.0191387559807,108.37320574162679 1366.0095693779904,129.1866028708134 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#A3004C"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>
  );
}

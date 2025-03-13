import Image from "next/image";

export default function healthiness(){
    return (
        <div>
            {/* Latar Belakang */}
            <div className="flex flex-col bg-gradient-to-b from-blue-950 to-purple-700">
                {/* Judul */}
                <div className="poppins font-semibold text-center text-slate-50 pt-20 pb-12 text-xl">
                    <span>HEALTHINESS</span>
                </div>
                {/* Isi */}
                <div className="poppins text-center leading-7 text-slate-50 px-72 pb-8">
                    <span>
                        Just like a I said before at the homepage, I like to workout whenever I have a freetime.
                        What you have to know is healthiness is one of the most important aspect in our life.
                        Yeah, I know sometime when we think about it, it doesn't make sense to keep our healthiness in a good quality due to our work time or study time.
                        But, if we want to, we can do it. 
                        The problem is, if we lack of exercise or stimulate our body, then we can't do any kind of activity normally when we become an elderly.
                        The next question is, how?
                    </span>
                </div>
                {/* LET's WRAP IT */}
                <div className="vampiro text-center text-slate-50 text-2xl">
                    <span>LET'S WRAP IT!!!</span>
                </div>
            </div>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                <path 
                fill="#8200DB" 
                fill-opacity="1" 
                d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>

            <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 pt-8 gap-4">
                {/* GAMBAR & WORKOUT */}
                <div className="md:col-span-7 row-span-2 text-center">
                    
                    <div className="flex flex-col justify-center">
                    {/* Gambar */}
                        <div className="flex justify-center pb-2.5">
                        <Image src="" alt="WORKOUT"/>
                        </div>
                    {/* Judul */}
                    </div>
                    
                </div>

                {/* KONTEN WORKOUT */}
                <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">

                </div>
            </div>
            
        </div>
        
    )
}
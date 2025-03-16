import Image from "next/image";

export default function healthiness(){
    return (
        <div>
            {/* Latar Belakang */}
            <div className="flex flex-col bg-gradient-to-b from-blue-950 to-purple-700">
                {/* Judul */}
                <div className="poppins font-semibold text-center text-slate-50 pt-20 pb-12 text-xl italic">
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
                        <Image src="/img/dumbell.jpg" alt="WORKOUT" width={150} height={150} className="rounded-full border-3 border-purple-800"/>
                        </div>
                    {/* Judul */}
                        <div className="poppins font-semibold text-xl">
                            <span>WORKOUT</span>
                        </div>
                    </div>
                    
                </div>

                {/* KONTEN WORKOUT */}
                <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">
                    <span>Why? In general, workout helps us to strengthen our bones and muscles.
                        Even we don't want to be like a bodybuilder or something else, we want to be healthy most of time, right?
                        Time by time, our bones and muscles' will tend to be getting weak.
                        Through workout (or any other exercises), it will help us to improve the balanceness of body and prevent from ostheoporosist.
                    </span>
                </div>
                

                
            </div>

            <svg 
            width="100%" 
            height="100%" 
            id="svg" 
            viewBox="0 0 1440 390" 
            xmlns="http://www.w3.org/2000/svg" 
            class="transition duration-300 ease-in-out delay-150">
                <defs>
                <linearGradient 
            id="gradient" 
            x1="50%" 
            y1="100%" 
            x2="50%" 
            y2="0%">
                <stop 

            offset="5%" 
            stop-color="#8200db">
                </stop>
                <stop 
                offset="95%" 
                stop-color="#ffffff">
                    </stop>
                </linearGradient>
                </defs>
                <path 
                d="M 0,400 L 0,150 C 205.71428571428572,192.85714285714286 822.8571428571429,171.42857142857144 1440,150 L 1440,400 L 0,400 Z" 
                stroke="none" 
                stroke-width="0" 
                fill="url(#gradient)" 
                fill-opacity="1" 
                class="transition-all duration-300 ease-in-out delay-150 path-0">
                    </path>
                </svg>

            {/* MAKANAN DAN GIZI */}
            <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4 bg-gradient-to-b from-purple-700 to-pink-800">
                <div className="md:col-span-7 row-span-2 text-center">
                    <div className="flex flex-col justify-center">
                        {/* Gambar */}
                        <div className="flex justify-center pb-2.5">
                            <Image src="/img/food.jpg" alt="FOOD" width={150} height={150} className="rounded-full border-3 border-slate-50"/>
                        </div>
                        {/* Judul */}
                        <div className="poppins font-semibold text-xl text-slate-50">
                            <span>
                            FOOD
                            </span>
                        </div>
                    </div>
                </div>
                
                

                {/* Konten Makanan */}
                <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6 text-slate-50">
                    <span>Well, calories and protein are the pressure point in this section.
                        How much calories and protein do we need per day?
                        They depend on activity intensity, bodyweight, and target of diet program (will not be discussed).
                        My advice is if you are about to start the program, don't change your eating habit, particularly from your food to clean food (please don't).
                        Just eat whatever you want in a calculated nutrition (not so precise number).
                    </span>
                </div>
            </div>

            <svg width="100%" height="100%" id="svg" viewBox="0 130 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 113.46411483253587,115.55023923444975 226.92822966507174,81.10047846889951 309,83 C 391.07177033492826,84.89952153110049 441.7511961722488,123.14832535885168 525,158 C 608.2488038277512,192.85167464114832 724.0669856459331,224.3062200956938 845,212 C 965.9330143540669,199.6937799043062 1091.9808612440193,143.6267942583732 1192,126 C 1292.0191387559807,108.37320574162679 1366.0095693779904,129.1866028708134 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#A3004C" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>


            </div>
        
    )
}
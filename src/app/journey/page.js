import Image from "next/image"

export default function Journey(){

    return(
        <div>
            {/* Latar Belakang */}
            <div className="flex flex-col bg-gradient-to-b from-blue-950 to-purple-700">
                {/* Judul */}
                <div className="poppins font-semibold text-center text-slate-50 pt-20 pb-12 text-xl italic">
                    <span>JOURNEY</span>
                </div>
                {/* Isi */}
                <div className="poppins text-center leading-7 text-slate-50 px-72 pb-8">
                    <span>
                        The summary of this content is about how the world change my perspective of life.
                        What kind of life do I want to achieve in the future?
                        What will I do everyday when i become an elderly?
                        What are the most things that I feared?
                    </span>
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
                            {/* GAMBAR & KARIR */}
                            <div className="md:col-span-7 row-span-2 text-center">
                                
                                <div className="flex flex-col justify-center">
                                {/* Gambar */}
                                    <div className="flex justify-center pb-2.5">
                                    <Image src="/img/swap.png" alt="SWAP" width={150} height={150} className=" p-5"/>
                                    </div>
                                {/* Judul */}
                                    <div className="poppins font-semibold text-xl">
                                        <span>SWITCHING CAREER</span>
                                    </div>
                                </div>
                                
                            </div>
            
                            {/* KONTEN SWITCHING KARIR */}
                            <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">
                                <span>
                                    After I graduated from mechanical engineering on January 2022, it was really empty, like what else that I need to do?
                                    Many people told me that I have to find a job. However, i don't understand what kind of job that suits me well.
                                    Until I searched a high salary job on youtube, I found something new called "Data Scientist".
                                    And I decided to ask anyone and then I found my cousin who works in data analyst.
                                    Subsequently, he introduced me how python works in data analyst. Therefore, I was excited and took an online data analytic bootcamp.
                                    Start of January 2023, I got my Data Analytic certificate and moved to Depok to start wandering, taking an English course, and applying for a job. Then, I got my first ever internship as data scientist intern remotely on March 2023.
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

            {/* OBSTACLE */}
                        <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4 bg-gradient-to-b from-purple-700 to-pink-800">
                            <div className="md:col-span-7 row-span-2 text-center">
                                <div className="flex flex-col justify-center">
                                    {/* Gambar */}
                                    <div className="flex justify-center pb-2.5">
                                        <div className="rounded-full bg-slate-50 p-3 border-4 border-purple-500">
                                        <Image src="/img/obstacle.png" alt="OBSTACLE" width={150} height={150} className="p-5"/>
                                        </div>
                                        
                                    </div>
                                    {/* Judul */}
                                    <div className="poppins font-semibold text-xl text-slate-50">
                                        <span>
                                        OBSTACLE
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            
            
                            {/* Konten Obstacle */}
                            <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6 text-slate-50">
                                <span>After I finished my internship at the end of May 2023, I was very satisfied.
                                And that was a huge mistake that I made. I thought the internship alone could really make a big difference for the next step on applying to another job.
                                Additionally, I didn’t maximize my time to learn the English language while I was on the previous internship program and so on.
                                What made it worse is I didn’t improve my public speaking skill. Therefore I continued the tasks.
                                Nevertheless, many obstacles came to me. Particularly, I still lacked stress management and so on. As a result, I needed to extend my English course.
                                Until January 2024, I had a test to join an intensive offline IT bootcamp (full stack developer). I passed the test and joined the program from March until August 2024.
                                </span>
                            </div>
                        </div>
            
                        <svg width="100%" height="100%" id="svg" viewBox="0 130 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 113.46411483253587,115.55023923444975 226.92822966507174,81.10047846889951 309,83 C 391.07177033492826,84.89952153110049 441.7511961722488,123.14832535885168 525,158 C 608.2488038277512,192.85167464114832 724.0669856459331,224.3062200956938 845,212 C 965.9330143540669,199.6937799043062 1091.9808612440193,143.6267942583732 1192,126 C 1292.0191387559807,108.37320574162679 1366.0095693779904,129.1866028708134 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#A3004C" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
            
                        <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4">
                            {/* GAMBAR & OBSTACLE 2 */}
                            <div className="md:col-span-7 row-span-2 text-center">
                                
                                <div className="flex flex-col justify-center">
                                {/* Gambar */}
                                    <div className="flex justify-center pb-2.5 ">
                                    <Image src="/img/obstacle.png" alt="OBSTACLE" width={150} height={150} className="p-5"/>
                                    </div>
                                {/* Judul */}
                                    <div className="poppins font-semibold text-xl">
                                        <span>OBSTACLE PART 2</span>
                                    </div>
                                </div>
                                
                            </div>
            
                            {/* KONTEN Obstacle 2 */}
                            <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">
                                <span>
                                During the IT bootcamp, it wasn't a smooth process. As I mentioned that the IT bootcamp was offline, I lived in a dorm as a first experience to blend with other people there.
                                Even at the beginning of the program I started to understand the goal of the learning, but here are the results. I just had a backend portfolio project (missed the opportunity for frontend portfolio), my communication still not so improved, and I missed a lot of time to study my english learning.
                                After I finished the IT bootcamp in August 2024, I continued to apply for a job and got a call from a company.
                                I failed because I couldn’t build a program on a technical test. I know that was a basic test but I had no clue back then.
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

                        {/* CAREER BREAK */}
                        <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4 bg-gradient-to-b from-purple-700 to-pink-800">
                            <div className="md:col-span-7 row-span-2 text-center">
                                <div className="flex flex-col justify-center">
                                    {/* Gambar */}
                                    <div className="flex justify-center pb-2.5">
                                        <div className="rounded-full bg-slate-50 p-3 border-4 border-purple-500">
                                        <Image src="/img/hourglass.png" alt="HOURGLASS" width={150} height={150} className="p-5"/>
                                        </div>
                                        
                                    </div>
                                    {/* Judul */}
                                    <div className="poppins font-semibold text-xl text-slate-50">
                                        <span>
                                        CAREER BREAK
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            
            
                            {/* Konten Career Break */}
                            <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6 text-slate-50">
                                <span>In September 2024, I decided to have a career break. Evaluate what aspect that I might have missed. And then as time went by, I found it. It was a character.
                                I lacked self education. Instead of just studying technical knowledge for a job, I started to watch a youtube video and bought a book to read.
                                Also, I extended my english course contract again but this time I promised to myself that I would discipline myself.
                                As a result, I could level up from A2 to B1. It was a rewarding achievement like I got my old values back. However, the journey was just the beginning.
                                </span>
                            </div>
                        </div>
            
                        <svg width="100%" height="100%" id="svg" viewBox="0 130 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 113.46411483253587,115.55023923444975 226.92822966507174,81.10047846889951 309,83 C 391.07177033492826,84.89952153110049 441.7511961722488,123.14832535885168 525,158 C 608.2488038277512,192.85167464114832 724.0669856459331,224.3062200956938 845,212 C 965.9330143540669,199.6937799043062 1091.9808612440193,143.6267942583732 1192,126 C 1292.0191387559807,108.37320574162679 1366.0095693779904,129.1866028708134 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#A3004C" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

                {/* 5TH */}

                <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4">
                            {/* GAMBAR & REDEMPTION */}
                            <div className="md:col-span-7 row-span-2 text-center">
                                
                                <div className="flex flex-col justify-center">
                                {/* Gambar */}
                                    <div className="flex justify-center pb-2.5">
                                    <Image src="/img/heal.png" alt="HEAL" width={150} height={150} className="p-5"/>
                                    </div>
                                {/* Judul */}
                                    <div className="poppins font-semibold text-xl">
                                        <span>REDEMPTION</span>
                                    </div>
                                </div>
                                
                            </div>
            
                            {/* KONTEN Redemption */}
                            <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6">
                                <span>
                                In November 2024, I got a freelance job as a data analyst from my cousin. This time, I worked not only with my tech knowledge, but also with my instinct and confidence to perform a logical approach to complete the task.
                                For the second time, I proved it. Once more I got a rewarding achievement for myself. It just lasted until December 2024. In the beginning of 2025, I leveled up from B1 to B2 through my persistence.
                                I could feel that I had already improved my public speaking skill even as an introvert.
                                At the end of January 2025, I participated in a social program from my English course.
                                I became a volunteer to clear the trash at the park.
                                Despite this being a social program, I made an effort to stay engaged in English by conversing with fellow participants and volunteers.
                                Thus, I made other achievements for myself. Progressively, I builded myself with several soft skills.
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

                        {/* CAREER BEGINNING OF JOURNEY */}
                        <div className="grid md:grid-cols-16 grid-rows-5 md:grid-rows-2 text-gray-950 gap-4 bg-gradient-to-b from-purple-700 to-pink-800">
                            <div className="md:col-span-7 row-span-2 text-center">
                                <div className="flex flex-col justify-center">
                                    {/* Gambar */}
                                    <div className="flex justify-center pb-2.5">
                                        <div className="rounded-full bg-slate-50 p-1 border-4 border-purple-500">
                                        <Image src="/img/running.png" alt="RUNNING" width={150} height={150} className="p-5"/>
                                        </div>
                                        
                                    </div>
                                    {/* Judul */}
                                    <div className="poppins font-semibold text-xl text-slate-50">
                                        <span>
                                        BEGINNING OF THE JOURNEY
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            
            
                            {/* Konten Journey */}
                            <div className="md:col-span-9 row-span-3 md:text-left text-center md:pr-44 pr-7 md:pl-0 pl-7 poppins text-sm md:leading-7 leading-6 text-slate-50">
                                <span>Additionally, I got a technical test to build a program again. To assign the task, I needed to watch a tutorial from a youtube video.
                                However, after I assigned my task, I didn’t understand what I did on my task. I failed the test and evaluated myself by watching a youtube video.
                                And yes, the recommendation was I must learn from the official documentation of the program that I used to keep my literature reading good.
                                Therefore, I worked on a full stack roadmap from scratch. I’m so relieved that I have done this so far.
                                From now on, I know (maybe just a little bit) what I want to do. I want to make as many creations as possible that can be inherited by people.
                                </span>
                            </div>
                        </div>
            
                        <svg width="100%" height="100%" id="svg" viewBox="0 130 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,150 C 113.46411483253587,115.55023923444975 226.92822966507174,81.10047846889951 309,83 C 391.07177033492826,84.89952153110049 441.7511961722488,123.14832535885168 525,158 C 608.2488038277512,192.85167464114832 724.0669856459331,224.3062200956938 845,212 C 965.9330143540669,199.6937799043062 1091.9808612440193,143.6267942583732 1192,126 C 1292.0191387559807,108.37320574162679 1366.0095693779904,129.1866028708134 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#A3004C" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

        </div>
    )
}
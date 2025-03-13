import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* // Foto Profil / Nama / Bio */}
    <div className="grid grid-cols-16 text-slate-50 bg-gradient-to-b from-blue-950 to-purple-700 pt-32 pb-10 gap-4">
      {/* Foto dan Nama */}
      <div className="col-span-7 text-center">
          {/* Flex */}
          <div className="flex flex-col justify-center">
            <div className="flex justify-center pb-2">
            <Image src="/img/avatar-balance.jpg" alt="avatar" width={150} height={150} className="rounded-full border-3 border-slate-50"/>
            </div>
          
          <span className="font-semibold poppins">Muhammad Sauqi Rizqullah</span>
          </div>
      </div>
      {/* Bio */}
      <div className="col-span-9 text-left pr-44 poppins text-sm leading-7">
      Hello, folks. My name is Sauqi. I am a graduate in a bachelor degree from Brawijaya University, Mechanical Engineering. I switched my career to programming field.
      Apart from programming, I like to self educate myself from reading books to improve my reading literation. 
      Furthermore through reading books, it helps me to become more independent individual and growth my own unique values.
      My hobbies are doing workout and exploring (a little bit) in culinary field.
      </div>
      
    </div>
    {/* SVG dari gelombang */}
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320">
      <path 
    fill="#8200DB" 
    fill-opacity="1" 
    d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
      </path>
      </svg>


    </div>
    
    
    
    
    
  );
}

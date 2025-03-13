export default function Navbar() {
    return (

        <div>
            <div className="bg-blue-950 flex justify-center  text-slate-50 gap-6 pt-2 pb-2 text-sm fixed w-full">
            {/* Home (SAUQI) */}
            <div className="vampiro flex items-center text-lg"> 
                <a href="#" className="hover:text-slate-400 transition duration-300 ease-out">SAUQI</a>
            </div>
            {/* GROWTH */}
            <div className="flex items-center">
                <a href="#" className="hover:text-slate-400 transition duration-300 ease-out">Growth</a>
            </div>
            {/* VALUES */}
            <div className="flex items-center">
                <a href="#" className="hover:text-slate-400 transition duration-300 ease-out">Values</a>
            </div>
            {/* HEALTHINESS */}
            <div className="flex items-center">
                <a href="#" className="hover:text-slate-400 transition duration-300 ease-out">Healthiness</a>
            </div>
        </div>
        <div className="bg-blue-950 h-11 w-full">

        </div>
        </div>
        
            
        
        
    )
}
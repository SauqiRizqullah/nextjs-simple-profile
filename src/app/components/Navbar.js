"use client";

import { useEffect } from "react"



export default function Navbar() {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            // const page = document.getElementById('page');

            const pages = document.querySelectorAll('#page');
            if(window.scrollY > 2) {
                navbar.classList.add('bg-slate-50', 'text-blue-950');
                navbar.classList.remove('bg-blue-950', 'text-slate-50');

                for (let page of pages) {
                    page.classList.add('hover:text-blue-800')
                    page.classList.remove('hover:text-slate-400')
                }
                // page.classList.add('hover:text-blue-800')
                // page.classList.remove('hover:text-slate-400')

            } else if (window.scrollY <= 2){
                navbar.classList.add('bg-blue-950', 'text-slate-50');
                navbar.classList.remove('bg-slate-50', 'text-blue-950');
                // page.classList.add('hover:text-slate-400')
                // page.classList.remove('hover:text-blue-800')

                for (let page of pages) {
                    page.classList.remove('hover:text-blue-800')
                    page.classList.add('hover:text-slate-400')
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (

        <div>
            <div id="navbar" className="bg-blue-950 flex justify-center  text-slate-50 gap-6 pt-2 pb-2 text-sm fixed w-full transition-all duration-300">
            {/* Home (SAUQI) */}
            <div className="vampiro flex items-center text-lg"> 
                <a id="page"  href="/" className="hover:text-slate-400 transition duration-300 ease-out">SAUQI</a>
            </div>
            {/* GROWTH */}
            <div className="flex items-center">
                <a id="page"  href="/journey" className="hover:text-slate-400 transition duration-300 ease-out">Journey</a>
            </div>
            {/* VALUES */}
            <div className="flex items-center">
                <a id="page"  href="/values" className="hover:text-slate-400 transition duration-300 ease-out">Values</a>
            </div>
            {/* HEALTHINESS */}
            <div className="flex items-center">
                <a id="page"  href="/healthiness" className="hover:text-slate-400 transition duration-300 ease-out">Healthiness</a>
            </div>
            
            
        </div>
        <div className="bg-blue-950 h-11 w-full">

        </div>
        </div>
        
            
        
        
    )
}
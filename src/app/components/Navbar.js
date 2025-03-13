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
                <a id="page"  href="#" className="hover:text-slate-400 transition duration-300 ease-out">SAUQI</a>
            </div>
            {/* GROWTH */}
            <div className="flex items-center">
                <a id="page"  href="#" className="hover:text-slate-400 transition duration-300 ease-out">Growth</a>
            </div>
            {/* VALUES */}
            <div className="flex items-center">
                <a id="page"  href="#" className="hover:text-slate-400 transition duration-300 ease-out">Values</a>
            </div>
            {/* HEALTHINESS */}
            <div className="flex items-center">
                <a id="page"  href="#" className="hover:text-slate-400 transition duration-300 ease-out">Healthiness</a>
            </div>
            
            {/* <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div> */}
        </div>
        <div className="bg-blue-950 h-11 w-full">

        </div>
        </div>
        
            
        
        
    )
}
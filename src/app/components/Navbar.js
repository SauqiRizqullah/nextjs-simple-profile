"use client";

import { useEffect, useState } from "react"
import Image from "next/image";
import Sidebar from "@/components/Sidebar"
import Link from "next/link";



export default function Navbar() {

    // state ke sideBar
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    }

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');

            const pages = document.querySelectorAll('#page');
            if(window.scrollY > 2) {
                navbar.classList.add('bg-slate-50', 'text-blue-950');
                navbar.classList.remove('bg-blue-950', 'text-slate-50');

                for (let page of pages) {
                    page.classList.add('hover:text-blue-800')
                    page.classList.remove('hover:text-slate-400')
                }

            } else if (window.scrollY <= 2){
                navbar.classList.add('bg-blue-950', 'text-slate-50');
                navbar.classList.remove('bg-slate-50', 'text-blue-950');

                for (let page of pages) {
                    page.classList.remove('hover:text-blue-800')
                    page.classList.add('hover:text-slate-400')
                }
            }
        };

        
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
           
        }
    }, [])
    return (

        <div>

        {/* Navbar baru  */}
        <nav id="navbar" className="bg-blue-950 md:flex md:justify-center md:items-center text-slate-50 gap-6 pt-2 pb-2 text-sm fixed w-full transition-all duration-300">
            <div className="vampiro flex items-center justify-between text-lg mx-6"> 
                <a id="page"  href="/" className="hover:text-slate-400 transition duration-300 ease-out">SAUQI</a>

                <div id="hamburger" className="cursor-pointer md:hidden block ml-6 ">
                    <Image src="/img/menu-hamburger.png" alt="MENU" height={20} width={20} onClick={toggleSidebar}/>
                </div>
            </div>
            {/* Menu Burger */}
            
            <ul id="sub-pages" className="md:flex flex-row gap-6 hidden">
                <li className="flex items-center md:my-0 my-1 md:mx-0 mx-4">
                    <Link id="page"  href="/journey" className="hover:text-slate-400 transition duration-300 ease-out">Journey</Link>
                </li>
                <li className="flex items-center md:my-0 my-1 md:mx-0 mx-4">
                    <Link id="page"  href="/values" className="hover:text-slate-400 transition duration-300 ease-out">Values</Link>
                </li>
                <li className="flex items-center md:my-0 my-1 md:mx-0 mx-4">
                    <Link id="page"  href="/healthiness" className="hover:text-slate-400 transition duration-300 ease-out">Healthiness</Link>
                </li>
            </ul>
        </nav>
        <div className="bg-blue-950 h-11 w-full">

        </div>

        <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar}/>
        
        </div>
        
           
    )
}
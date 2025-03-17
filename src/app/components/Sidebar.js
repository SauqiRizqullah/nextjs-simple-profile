

export default function Sidebar({ isVisible, toggleSidebar }) {

    return (
        <div>
            {/* Sidebar */}

        <aside className={`${isVisible ? 'left-[0px]' : 'left-[-424px]'} flex fixed w-[400-px] bg-slate-50 flex-col z-10 poppins h-[624px] pt-5 pl-5 top-[-11px] transition-all duration-500`}>
                <div className="flex justify-between mb-4 pr-3">
                    <span className="pr-10 text-md">Please select a content: </span>
                    <button className="text-xs text-gray-800 hover:text-red-500 cursor-pointer transition duration-300 ease-out" onClick={toggleSidebar}>close</button>
                </div>
                <ul className="flex flex-col text-sm gap-2">
                    <li className="flex items-center ml-5">
                        <a id="page"  href="/" className="hover:text-purple-400 text-blue-800 transition duration-300 ease-out">Home</a>
                    </li>
                    <li className="flex items-center ml-5">
                        <a id="page"  href="/journey" className="hover:text-purple-400 text-blue-800 transition duration-300 ease-out">Journey</a>
                    </li>
                    <li className="flex items-center ml-5">
                        <a id="page"  href="/values" className="hover:text-purple-400 text-blue-800 transition duration-300 ease-out">Values</a>
                    </li>
                    <li className="flex items-center ml-5">
                        <a id="page"  href="/journey" className="hover:text-purple-400 text-blue-800 transition duration-300 ease-out">Healthiness</a>
                    </li>
                </ul>
            </aside>

            {/* {isVisible && (
                <div id="hitam" className="bg-gray-900/70 fixed w-full h-full z-5 transition-all duration-700" onClick={toggleSidebar}></div>
            )} */}

            <div id="hitam" 
            className={`bg-gray-900/70 fixed w-full h-full z-5 transition-all duration-500 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
            onClick={toggleSidebar}>
            </div>
        </div>
    )
}
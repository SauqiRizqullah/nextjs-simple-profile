import Image from "next/image"

export default function Footer() {
    return(
        <div className="bg-slate-50 grid grid-flow-col grid-rows-3 poppins pb-4">
        {/* CONTACT */}
        <div className="text-gray-950 text-center font-medium text-xl">
            CONTACT
        </div>
        {/* MEDIA SOSIAL ICONS */}
        <div className="flex justify-center gap-5 pb-5 pt-2">
            <a href="">
                <Image width={10} height={10} src="/img/linkedin.png" alt="linkedin"/>
            </a>
            <a href="">
                <Image width={10} height={10} src="/img/instagram.png" alt="instagram"/>
            </a>
            <a href="">
                <Image width={10} height={10} src="/img/tik-tok.png" alt="tiktok"/>
            </a>
            <a href="">
                <Image width={10} height={10} src="/img/youtube.png" alt="youtube"/>
            </a>
            <a href="">
                <Image width={10} height={10} src="/img/google-glass-logo.png" alt="google"/>
            </a>
            <a href="">
                <Image width={10} height={10} src="/img/github.png" alt="github"/>
            </a>
        </div>
        {/* CREATED BY SAUQI */}
        <div className="text-center text-xs">
            Created by <a href="#" className="text-blue-600 underline underline-offset-1 hover:text-blue-800">Sauqi</a>
        </div>
    </div>
    )
    
}
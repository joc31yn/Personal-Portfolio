import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import juiceLogo from '@/imgs/juice.png';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className={`!font-poppins mb-[3%] top-[2%] sticky z-[20] flex justify-between text-charcoal mx-auto px-[1%] w-[97%] bg-gray-200 bg-opacity-30 !backdrop-blur-md py-[0.5%] rounded-full shadow-[0_0_0.8rem_rgba(0,0,0,0.18)]`}>
                <Link href='/'>
                    <Image src={juiceLogo} className='absolute top-[12%] left-[2%] float-left w-16' href='/' alt='home logo' />
                </Link>
                <ul className='mx-auto hidden sm:flex gap-12 font-semibold text-base'>
                    <li className="p-3 hover:bg-charcoal hover:text-white rounded-3xl transition-all cursor-pointer"><Link href="/Project">Projects</Link></li>
                    <li className="p-3 hover:bg-charcoal hover:text-white rounded-3xl transition-all cursor-pointer"><Link href="/Resume">Resume</Link></li>
                    <li className="p-3 hover:bg-charcoal hover:text-white rounded-3xl transition-all cursor-pointer"><Link href="/Blog">Blog</Link></li>
                    <li className="absolute right-[1.5%] p-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded-3xl transition-all cursor-pointer"><Link href="/Contact">Contact</Link></li>
                </ul>
                <i className={`scale-75 bx bx-menu sm:!hidden block text-5xl cursor-pointer ml-auto ${!menuOpen ? "opacity-100" : "!hidden"}`}
                    onClick={() => setMenuOpen(!menuOpen)}></i>
                <i className={`scale-90 bx bx-x sm:!hidden block text-5xl cursor-pointer ml-auto ${menuOpen ? "opacity-100" : "!hidden"}`}
                    onClick={() => setMenuOpen(!menuOpen)}></i>
            </header>
            <div className={`fixed flex left-[2%] top-[12%] z-[100] rounded-3xl w-[96%] backdrop-blur-md bg-gray-200 bg-opacity-30 flex-col font-semibold text-lg transform transition-transform sm:hidden shadow-[0_0_0.8rem_rgba(0,0,0,0.18)] ${menuOpen ? "!opacity-100" : "hidden"}`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <li className='list-none w-full text-center p-3 hover:text-indigo-500 hover:font-extrabold transition-all cursor-pointer'><Link href="/Project">Project</Link></li>
                <li className='list-none w-full text-center p-3 hover:text-indigo-500 hover:font-extrabold transition-all cursor-pointer'><Link href="/Resume">Resume</Link></li>
                <li className='list-none w-full text-center p-3 hover:text-indigo-500 hover:font-extrabold transition-all cursor-pointer'><Link href="/Blog">Blog</Link></li>
                <li className='list-none w-full text-center p-3 hover:text-indigo-500 hover:font-extrabold transition-all cursor-pointer'><Link href="/Contact">Contact</Link></li>
            </div>
        </>
    );
}

export default NavBar;
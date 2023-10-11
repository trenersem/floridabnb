'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { GiPalmTree } from 'react-icons/gi';
interface INavLink {
    id: number,
    name: string,
    to: string,
}
const navLinks = [
    {
        id: 1,
        name: 'About',
        to: '/about',
    },
    {
        id: 2,
        name: 'Customers',
        to: '/customers',
    },
    {
        id: 3,
        name: 'Help',
        to: '/help',
    },
    {
        id: 4,
        name: 'Contact',
        to: '/contact',
    },
]

const Nav = () => {
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 30 ) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);

        return () => {
            window.removeEventListener('scroll', handleShadow);
        };
    }, []);
    
            // This code is for blocking the scroll, which is located under the modal
        useEffect(() => {
            const { body } = document;
            if (toggleDropDown) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
            return () => {
                body.style.overflow = 'visible';
            };
        }, [toggleDropDown]);

  return (
    <>
        <nav 
            className={`sticky inset-x-0 top-0 z-30  transition-all ${shadow && 'border-b border-gray-200 bg-white/75 backdrop-blur-lg'}`}
        >
            <div
                className='flex-between w-full py-3 sm:gap-20  max-w-7xl mx-auto sm:px-16 px-6'
            >
                <div className="z-30">
                    <Link href='/' className="flex flex-center gap-2">
                        <GiPalmTree className='w-[2.5em] h-[2.5em]'/>
                        <p className='logo_text relative right-4 top-2'>
                            <span className='orange_gradient'>
                                 PremierFloridaBNB
                            </span>
                            <span className='text-[8px] text-blue-400 absolute  top-3 left-0'>
                                Working harder for you
                            </span>
                        </p>
                    </Link>
                </div>

                {/* Desktop NAV */}
                <div className="sm:flex hidden items-center justify-between w-full">
                        <div className="flex gap-3 md:gap-5">
                            {navLinks.map((link: INavLink) => (
                                <Link
                                    key={link.id}
                                    href={link.to}
                                    className='text-gray-500 text-satoshi  text-sm font-medium transition-colors hover:text-black ease-out'
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link
                            type='phone'
                            href='tel:+17542751268'
                            className="black_btn"
                        >
                            +17542751268
                        </Link>
                </div>

                {/* MOBILE NAV */}
                <div className="sm:hidden flex relative">
                        <div className="flex">
                            {toggleDropDown && (
                                <div className={`fixed inset-0 z-20 ${toggleDropDown ? 'flex' : 'hidden'} flex-col w-full bg-white px-5 py-16`}>
                                    <ul className="grid divide-y divide-gray-200">
                                        {navLinks.map((link: INavLink) => (
                                            <Link
                                                key={link.id}
                                                href={link.to}
                                                className="first-letter:flex w-full font-semibold capitalizet py-3"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                </div>
            </div>

        </nav>
        <button
            className="sm:hidden block absolute right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden"
            onClick={() => {
                setToggleDropDown((prev) => !prev)
            }}
        >
            {toggleDropDown ? <AiOutlineClose /> : <AiOutlineMenu/>}
        </button>
    </>
  )
}

export default Nav

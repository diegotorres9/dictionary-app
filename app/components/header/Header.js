"use client";

import Image from "next/image"
import { useState } from "react";
import { useTheme } from "next-themes";
import AppLogo from "../../../public/images/logo.svg";


export default function Header ({fontChange}) {
    const {systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [isOpen, setOpen] = useState(false);
    const handleDropdown = () => {
        setOpen(!isOpen);
    }
    return (
    <header className='grid grid-cols-header-grid items-center mb-6 lg:mb-[51.5px]'>
        <Image 
            width={32}
            height={36.5}
            alt="Dictionary App Logo."
            src={AppLogo}
        />
        <div className="font-select relative inline-block text-left">
            <div>
                <button className="inline-flex w-full justify-center" onClick={handleDropdown}>
                    Sans Serif
                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="#A445ED" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className={`absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-black shadow-xl dark:shadow-shadow-violet ${isOpen ? "block" : "hidden"}`}>
                    <ul className="py-1">
                        <li className="block px-4 py-2 font-sans font-bold dark:text-white hover:text-violet hover:cursor-pointer" id="font-sans" onClick={fontChange}>Sans Serif</li>
                        <li className="block px-4 py-2 font-serif font-bold dark:text-white hover:text-violet hover:cursor-pointer" id="font-serif" onClick={fontChange}>Serif</li>
                        <li className="block px-4 py-2 font-mono dark:text-white hover:text-violet hover:cursor-pointer" id="font-mono" onClick={fontChange}>Mono</li>
                    </ul>
                </div>
            </div>

            {/* <select name="fonts" id="font-select" className="font-select block rounded-md focus:border-violet" aria-label="font-select" onChange={fontChange}>
                <option className="focus:font-sans" value="font-sans">Sans Serif</option>
                <option className="font-serif" value="font-serif">Serif</option>
                <option className="font-mono" value="font-mono">Mono</option>
            </select> */}
        </div>

        <div className="theme-switch-container justify-self-end flex justify-self-center">
            <label onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} htmlFor="theme-switch" className="flex justify-between items-center p-2 relative">
            <input
                type="checkbox"
                name="theme-switch"
                className="appearance-none absolute left-0 top-0 w-full h-full peer rounded-md"
                
            />
            <span className="w-[40px] h-[20px] flex items-center flex-shrink-0 ml-4 p-1 bg-violet rounded-full duration-300 ease-in-out peer-checked:bg-violet after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
            </label>
            <svg className="self-center" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke={theme == "dark" ? "#A445ED" : "#838383"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
        </div>
    </header>
    )
}
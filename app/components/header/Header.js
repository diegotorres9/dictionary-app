"use client";

import Image from "next/image"
import { useTheme } from "next-themes";
import AppLogo from "../../../public/images/logo.svg";


export default function Header ({fontChange}) {
    const {systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
    <header className='grid grid-cols-header-grid items-center'>
        <Image 
            width={32}
            height={36.5}
            alt="Dictionary App Logo."
            src={AppLogo}
        />
        <div className="font-select">
            <select name="fonts" id="font-select" className="font-select block rounded-md border-transparent bg-transparent focus:border-violet" aria-label="font-select" onChange={fontChange}>
                <option value="font-sans">Sans Serif</option>
                <option value="font-serif">Serif</option>
                <option value="font-mono">Mono</option>
            </select>
        </div>

        <div className="theme-switch-container justify-self-end flex inline-block">
            <input
                type="checkbox"
                name="theme-switch"
                className="theme-switch sr-only absolute left-0 top-0 w-full h-full peer rounded-md"
                
            />
            <label onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} htmlFor="theme-switch" className="flex justify-between items-center p-2 text-xl relative">
            <span className="w-[40px] h-[20px] flex items-center flex-shrink-0 ml-4 p-1 bg-dark-gray rounded-full duration-300 ease-in-out peer-checked:bg-violet after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke={theme == "dark" ? "#A445ED" : "#838383"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
        </div>
    </header>
    )
}
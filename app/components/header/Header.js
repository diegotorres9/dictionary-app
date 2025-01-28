"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import useClickOutside from "../../hooks/ClickOutside";


export default function Header ({fontChange, selectFont}) {
    const {systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [isOpen, setOpen] = useState(false);
    const ref = useClickOutside(() => setOpen(false));

    return (
    <header className='grid grid-cols-[34px_1fr_1fr_1fr_10px_1fr] lg:grid-cols-[_34px_1fr_1fr_1fr_10px_100px] items-center mb-6 lg:mb-[51.5px] relative'>
        <svg className='col-span-2' xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38"><g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/><path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"/><path d="M11 9h12"/></g></svg>
        <div ref={ref} className="font-select relative inline-block text-left col-start-3 col-span-2 justify-self-end">
            <>
                <button className="inline-flex w-full justify-center" onClick={() => setOpen(true)}>
                    {!selectFont && 'Sans Serif'}
                    {selectFont === 'font-sans' && 'Sans Serif'}
                    {selectFont === 'font-serif' && 'Serif'}
                    {selectFont === 'font-mono' && 'Mono'}
                    <svg className="-mr-1 size-5 text-gray-400 ml-[16px]" viewBox="0 0 20 20" fill="#A445ED" aria-hidden="true" data-slot="icon">
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
            </>
        </div>
        {/* vertical bar */}
        <svg className="col-start-5 justify-self-end" width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1" height="32" fill="#E9E9E9"/>
        </svg>
        <div className="theme-switch-container justify-self-end flex col-start-6">
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
"use client";

import Image from "next/image"
import { useTheme } from "next-themes";
import AppLogo from "../../../public/images/logo.svg";
import MoonIcon from "../../../public/images/icon-moon.svg";

export default function Header ({fontChange}) {
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
                className="theme-switch sr-only absolute left-0 top-0 w-full h-full appearance-none peer rounded-md"
                onClick={() => console.log("clicked")}
            />
            <label htmlFor="theme-switch" className="flex justify-between items-center p-2 text-xl relative">
            <span className="w-[40px] h-[20px] flex items-center flex-shrink-0 ml-4 p-1 bg-dark-gray rounded-full duration-300 ease-in-out peer-checked:violet after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
            </label>
            <Image 
                width={15.55}
                height={15.55}
                alt=""
                src={MoonIcon}
            />
        </div>
    </header>
    )
}
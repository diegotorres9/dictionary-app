"use client";

import Image from "next/image"
import AppLogo from "../../../public/images/logo.svg";
import MoonIcon from "../../../public/images/icon-moon.svg";
import styles from "./headerstyles.module.css";

export default function Header ({fontChange}) {
    return (
    <header className={styles.header}>
        <Image 
            width={32}
            height={36.5}
            alt="Dictionary App Logo."
            src={AppLogo}
        />
        <div className="font-select">
            <select name="fonts" id="font-select" className="font-select" aria-label="font-select" onChange={fontChange}>
            <option value="font-sans">Sans Serif</option>
            <option value="font-serif">Serif</option>
            <option value="font-mono">Mono</option>
        </select>
        </div>

        <div className="theme-switch-container">
            <label htmlFor="theme-switch" id="theme-switch" className="theme-switch">
                <input type="checkbox" id="theme-slider" className="theme-slider" />
                <span className="slider round"></span>
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
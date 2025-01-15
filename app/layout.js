"use client";
import { useState } from "react";
import Theme from "./providers/theme-provider";
import Header from "./components/header/Header";
import './styles/globals.css';
export default function RootLayout({ children }) {
    const [selectFont, setSelectFont] = useState('');

    const fontChange = (e) => {
        setSelectFont(e.target.value);
    }

    return (
    <html lang="en" suppressHydrationWarning={true}>
        <body className={`px-6 pt-6 pb-auto lg:px-xl-x lg:pt-xl-t lg:pb-xl-b ${selectFont}`}>
            <Theme>
                <Header fontChange={fontChange} />
                {children}
            </Theme>
        </body>
    </html>
    )
}
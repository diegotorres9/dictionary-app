'use client';

import { ThemeProvider } from "next-themes";

export default function Theme({ children }) {
    return (
        <ThemeProvider attribute="selector" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}
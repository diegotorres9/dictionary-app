import Header from "./components/header/Header";
import './styles/globals.css';
export default function RootLayout({ children }) {
    return (
    <html lang="en">
        <body className="px-6 pt-6 pb-auto lg:px-xl-x lg:pt-xl-t lg:pb-xl-b">
            <Header />
            {children}
        </body>
    </html>
    )
}
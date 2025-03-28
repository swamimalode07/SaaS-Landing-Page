import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body 
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white `}
            >
                {children}
                <a
                    href="https://swamimalode.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 z-50"
                >
                    <img
                        src="/portfolio.png"
                        alt="Visit My Portfolio"
                        className="w-10 h-10 rounded-lg outline outline-2 outline-offset-2 outline-transparent outline-lime-400 shadow-lg hover:scale-105 transition-transform"
                    />
                </a>
            </body>
        </html>
    );
}

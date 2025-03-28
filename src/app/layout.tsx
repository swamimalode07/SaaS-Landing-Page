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
    title: "Landing Page",
    description: "Created with the help of Frontend Tribe",
    icons: {
        icon: "/image.png", // Use image.png as the favicon
    },
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
                    className="fixed bottom-4 right-4 z-50 group"
                >
                    <img
                        src="/portfolio.png"
                        alt="Visit My Portfolio"
                        className="w-8 h-8 rounded-lg outline outline-2 outline-offset-2 outline-lime-400 shadow-lg hover:scale-105 transition-transform"
                    />

                    {/* Smaller Tooltip */}
                    <span className="absolute -top-8 right-8 translate-x-1/2 opacity-0 group-hover:opacity-100 bg-lime-400 text-black px-2 py-0.5 rounded text-xs font-semibold shadow-md transition-opacity duration-500">
                        Portfolio
                    </span>
                </a>
            </body>
        </html>
    );
}

"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { AnimatePresence,motion } from "framer-motion";


const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen,setIsOpen]=useState(false);



    return (
        <>
    <section className="py-4 lg:py-8  fixed w-full top-0 z-50">
        <div className="container max-w-5xl"> 
            <div className="border border-white/15 rounded-[27px] md:rounded-full  bg-neutral-950/70 backdrop-blur">
                <div className="grid grid-cols-2 lg:grid-cols-3    p-2 px-4 md:pr-2  items-center   ">
                    <div>
                    <Image src="/logo.svg" alt="Logo image" width={120} height={46}
            />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map(link=>(
                                <a href={link.href} key={link.label}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>    
                    </div> 
                    <div className="flex justify-end gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu md:hidden "
                        onClick={()=>{setIsOpen(!isOpen)}}
                        aria-hidden="true"
                    >
                    
                        <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition",isOpen && " rotate-45 -translate-y-1")}/>
                        <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")} />
                        <line x1="3" y1="18" x2="21" y2="18" className={twMerge( "origin-left transition", isOpen && "-rotate-45 translate-y-1")} />
                    </svg>
                    <Button className="hidden md:inline-flex items-center" variant="secondary">Log in</Button>
                    <Button className="hidden md:inline-flex items-center" variant="primary">Sign up</Button>
                    {/* <button className="border-white h-12 rounded-full px-6 font-medium ">Log in</button>
                    <button>Sign up</button> */}

                    </div>
                </div>
                <AnimatePresence >
                {isOpen &&
                    <motion.div 
                    initial={{height:0}}
                    animate={{height:"auto"}}
                    exit={{height:0}}
                    className=" overflow-hidden">
                        <div className=" flex flex-col items-center gap-4 py-4">
                            {navLinks.map((link)=>(
                                <a href={link.href} key={link.label} className="" >{link.label}</a>
                            ))}
                            <Button variant="secondary" className="">Log in</Button>
                            <Button variant="primary">Sign up</Button>
                        </div>
                    </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
    </section>
    <div className="pb-[75px] md:pb-[90px] lg:pb-[120px]"></div>
    </>
    )
}

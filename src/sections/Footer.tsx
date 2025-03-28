
import Image from "next/image";

const footerLinks = [
    {
      href: "https://swamimalode.online",
      label: "Contact",
      target: "_blank",
      rel: "noopener noreferrer",   
    },
    { href: "https://swamimalode.online", label: "Privacy Policy",
        target: "_blank",
        rel: "noopener noreferrer"   },
    { href: "https://swamimalode.online", label: "Terms & Conditions",
        target: "_blank",
        rel: "noopener noreferrer",  },
  ];

export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-row  items-center md:justify-between   gap-6">
                <div>
                <Image 
                            src="/logo.svg" 
                            alt="Logo" 
                            width={130} 
                            height={40} 
                            priority
                        />
                </div>
                <div>
                    <nav className="flex gap-6">
                        {footerLinks.map((link,index)=>(
                            <a key={index} href={link.href} target={link.target || "_self"}
                            rel={link.rel || "noopener noreferrer"} className="text-white/50 text-sm">{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>
}

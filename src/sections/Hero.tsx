import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";


export default function Hero() {
    return <section className="py-24 overflow-x-clip ">
        <div className="container relative">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image 
                    src={designExample1Image} 
                    alt="Design example image 1" 
                />
            </div>
            <div className="absolute -right-64 -top-16 hidden lg:block  ">
                <Image src={designExample2Image} alt="Design example image 2"/>
            </div>
            <div className="absolute left-56 top-96 hidden lg:block">
                      <Pointer name="swami" color="blue" /> 
            </div>
            <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="bryan" color="red"/>
            </div>
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold ">
                ✨ $7.5 million seed round raised
                </div>
            </div>
            <h1 className="text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl">
                Impactful design, created effortlessly
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sequi vitae, vero eos odit ipsam ullam non delectus autem dicta!
            </p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 w-full max-w-lg mx-auto">
    <input
        type="email"
        placeholder="Enter your email"
        className="bg-transparent px-4 flex-1 min-w-0 w-full outline-none"
    />
    <Button
        type="submit"
        variant="primary"
        className="whitespace-nowrap"
        size="sm"
    >
        Sign up
    </Button>
</form>

        </div>
    </section>
}

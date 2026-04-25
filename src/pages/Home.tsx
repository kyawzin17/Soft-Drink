import { FaCartPlus } from "react-icons/fa";
import "../App.css";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
export default function Home() {

    const heroRef= useRef<HTMLDivElement>(null);
    const homeRef= useRef<HTMLElement>(null);

    const tl= gsap.timeline({ defaults: { ease: "power2.out"}});

    useGSAP(() => {
        tl.from(heroRef.current, {
            scaleY: 0,
            duration: 0.8,
            opacity: 1,
            delay: 0.2
        })
    }, {scope: homeRef})

    return (
         <section ref={homeRef} id="home" className="w-full h-auto px-7 py-30 relative z-2">
                   <div className="max-w-6xl h-auto mx-auto relative">
                        {/* Hero */}
                        <div ref={heroRef} className="w-full flex flex-col justify-center items-center gap-2 h-70 z-12">    
                            <article className="max-w-180 block text-wrap">
                                <p className="text-[12px] text-secondary ms-1 -mb-1 text-center">LEMON FLAVOR!</p>
                                <h1 className="hero-head text-2xl xs:text-3xl sm:text-5xl font-semibold font-serif text-center">FOR A COOL AND REFRESHING EXPERIENCE</h1>
                            </article>
                            <p className="head-mute text-base leading-5 block max-w-80 text-wrap text-softt line-height-sm text-center cursor-pointer">Made width pure natural lemon juice, it has a refreshing and refreshing taste.</p>
                            <div className="mt-4">
                                <button className="flex items-center text-center bg-linear-to-r from-(--primary)/90 to-(--secondary)/80 py-2 px-4 text-extrabold text-black font-serif hover:shadow-[0_0_14px_rgba(255,214,10,0.6)] transition-all duration-100 cursor-pointer rounded-xl">
                                 <span className="me-2">Shop now</span>
                                  <FaCartPlus size={18} /></button>    
                            </div>
                        </div>
                   </div>
            </section>
    )
}
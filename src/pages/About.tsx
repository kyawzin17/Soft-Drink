import { useGSAP } from "@gsap/react";
import BottleG from "../photo/bottleG.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AboutProps {
    id: string;
}
const About= forwardRef<HTMLElement, AboutProps>(({ id }, ref) => {
    const aboutRef= useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl= gsap.timeline({ defaults: {ease: "back.out(1.5)"}, scrollTrigger: { trigger: aboutRef.current, start: "top 70%"}});
        
        tl.from(".about-lt", {
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
        })
        tl.from(".about-rt", {
            scaleY: 0,
            opacity: 1,
            duration: 0.6,
        })
        tl.from(".about-lb", {
            x: 100,
            opacity: 0,
            duration: 0.6,
        })
        tl.from(".about-rb", {
            x: -100,
            opacity: 0,
            duration: 0.6,
        })

    }, { scope: aboutRef});

    return(
        <section id={id} ref={ref} className="w-full h-auto py-16 px-6 scroll-mt-16" >
            <div ref={aboutRef} className="max-w-6xl h-auto mx-auto flex flex-wrap justify-around items-center gap-x-12 gap-y-20">
                        <div className="about-lt max-w-100">
                            <h2 className="text-(--primary) font-bold text-2xl mb-6">Our Story</h2>
                            <p className="text-(--text-between)">
                                We have been working since 2020 to create safe and refreshing drinks for the people of Myanmar. We use minimal chemical dyes and preseratives, and prioritize the natural, refreshing taste.    
                            </p>
                        </div>
                        <div className="about-rt max-w-100">
                            <img src={BottleG} className="w-full rotate-30 md:rotate-0 mx-auto rounded-lg about-img animate-wiggle" alt="buttle1" />
                        </div>
                        <div className="about-lb max-w-100 md:order-2 border border-white/70 rounded-md bg-white/60 backdrop-blur-lg p-4">
                            <h2 className="text-secondary font-bold text-2xl mb-6 text-shadow-bg text-shadow-md">Why choose limon drink?</h2>
                            <p className="text-bg font-medium text-base">
                                Limon drink is made from natural ingredients, with a focus on delivering a refreshing and delicious taste. We prioritize quality and sustainability in our production processes, ensuring that our drinks are not only enjoyable but also environmentally responsible.
                            </p> 
                        </div>
                        <div className="about-rb max-w-100 md:order-2 border border-white/70 rounded-md bg-white/60 backdrop-blur-lg p-4">
                            <h2 className="text-secondary font-bold text-2xl mb-6 text-shadow-bg text-shadow-md">Our Mission</h2>
                            <p className="text-bg font-medium text-base">
                                Our mission is to provide delicious and refreshing drinks made from natural ingredients, while promoting sustainability and environmental responsibility in our production processes. We aim to create a positive impact on both our customers and the planet.
                            </p>
                        </div>
            </div>
        </section>
    )
})

export default About;
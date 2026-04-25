import Header from "./pages/Header";
import Home from "./pages/Home";
import CircleAni from "./components/CircleAni";
import Bottle from "./photo/bottle.png";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { FaArrowCircleUp } from "react-icons/fa";

import { useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger,useGSAP);
function App() {

  const bottleRef= useRef<HTMLImageElement>(null);
  const mainRef= useRef<HTMLElement>(null);
  const circleRef= useRef<HTMLElement>(null);

  const tl=gsap.timeline({ defaults: { ease: "back.out(1.5)"}});

  useGSAP(() => {
    tl.to(bottleRef.current, {
      y: 200,
      opacity: 1,
      duration: 0.8,
      delay: 1
  })
  .to(bottleRef.current, {
      x: 420,
      y: 180,
      rotate: 315,
      opacity: 1,
      duration: 1.5,
  });

  gsap.from(circleRef.current, {
      y: 100,
      scaleX: 0.4,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.5)",
       scrollTrigger: {
        trigger: circleRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    });

    gsap.fromTo(bottleRef.current, {
      x: 420,
      y: 180,
      rotate: 315,
      opacity: 1,
    }, {
      x: -300,
      y: 1000,
      scale: 1.2,
      rotate: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 88%",
        end: "bottom +=300",
        scrub: true,
      },
      immediateRender: false
    })

  }, { scope: mainRef});

  return (
    <div className="w-full h-auto bg-bg relative">
      <svg className="absolute w-full h-250 left-0 top-0 z-1 pointer-events-none">
            <defs>
                <radialGradient id="mainCircle">
                    <stop offset="0%" stopColor="#5EEADA" opacity="0.2" />
                    <stop offset="100%" stopColor="#050B1E" />
                </radialGradient>    
            </defs>
            <circle cx="50%" cy="150" r="250" fill="url(#mainCircle)" className="blur-[250px]"/>
        </svg>
      <Header />
      <main ref={mainRef} className="relative">
          <div ref={bottleRef} className="w-80 h-autom absolute top-10 left-[50%] -translate-1/2 z-20 opacity-0">
             <motion.img 
              animate={{ rotate: [0, 10, 0, -10, 0]}}
              transition={{ duration: 2, ease: "linear", repeat: Infinity}} src={Bottle} className="w-80" alt='Soft Drink bottle'/>
          </div>
          <Home />
          <section ref={circleRef} className="w-full p-6">
            <CircleAni/>
          </section>
          <section id="product" className="py-10 w-full h-auto px-6">
            <Product />
          </section>
          <section id="about" className="py-16 w-full h-auto px-6">
            <About />
          </section>
          <section id="contact" className="w-full h-auto py-16 px-6">
            <Contact />
          </section>
      </main>
       <footer className="w-full bg-bg/70 border-t border-white-500 p-4 mt-6 font-serif text-center relative">
            <p className="text-muted text-base">"Lemon drink" started with a simple but meaningful purpose-to provide the best and putest fruit flavor for everyone.</p>
            <button className="absolute bottom-4 right-6">
              <FaArrowCircleUp size={24} className="text-primaryt"/>
            </button>
        </footer>
    </div>
  )
}
export default App;
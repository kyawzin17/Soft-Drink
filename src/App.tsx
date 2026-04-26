import Header from "./pages/Header";
import Home from "./pages/Home";
import CircleAni from "./components/CircleAni";
import Bottle from "./photo/bottle.png";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import UserDashboard from "./pages/User";
import Noti from "./pages/Noti";
import { FaArrowCircleUp } from "react-icons/fa";

import backgroundImage from "./photo/background-sd.png";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger,useGSAP);
function App() {

  const bottleRef= useRef<HTMLImageElement>(null);
  const mainRef= useRef<HTMLElement>(null);
  const circleRef= useRef<HTMLElement>(null);
  const sectionRef= useRef<{ [key: string]: HTMLElement | null}>({});

  const [ active, setActive ]= useState<string>("home");
  const [ cart, setCart ]= useState<boolean>(false);
  const [ user, setUser ]= useState<boolean>(false);
  const [ noti, setNoti ]= useState<boolean>(false);

 useEffect(() => {
    // Scroll ဆွဲတဲ့အခါ ဘယ် section ရောက်နေလဲဆိုတာကို Observer နဲ့ ဖမ်းမယ်
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '100px 0px -70% 0px',
      }
    );

    // Section အားလုံးကို လိုက်စောင့်ကြည့်မယ်
    Object.values(sectionRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  useGSAP(() => {
    const tl=gsap.timeline({ defaults: { ease: "back.out(1.5)"}});

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
    <div className="w-full h-auto relative">
      <div className="w-full h-full fixed top-0 left-0 -z-1"
      style={{ backgroundImage: `url(${backgroundImage})`,
                 backgroundSize: 'cover',
                  backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat' }}>

      </div>
      <Cart cart={cart} setCart={setCart}/>
      <UserDashboard user={user} setUser={setUser}/>
      <Noti noti={noti} setNoti={setNoti} />
      <svg className="absolute w-full h-250 left-0 top-0 z-1 pointer-events-none">
            <defs>
                <radialGradient id="mainCircle">
                    <stop offset="0%" stopColor="#5EEADA" opacity="0.2" />
                    <stop offset="100%" stopColor="#050B1E" />
                </radialGradient>    
            </defs>
            <circle cx="50%" cy="150" r="250" fill="url(#mainCircle)" className="blur-[250px]"/>
        </svg>
      <Header active={active} setActive={setActive} setCart={setCart} setUser={setUser} setNoti={setNoti}/>
      <main ref={mainRef} className="relative">
          <div ref={bottleRef} className="w-80 h-autom absolute top-10 left-[50%] -translate-1/2 z-20 opacity-0">
             <motion.img 
              animate={{ rotate: [0, 10, 0, -10, 0]}}
              transition={{ duration: 2, ease: "linear", repeat: Infinity}} src={Bottle} className="w-80" alt='Soft Drink bottle'/>
          </div>
          <Home id="home" setCart={setCart} ref={(el) => {sectionRef.current['home']= el}}/>
          <section ref={circleRef} className="w-full p-6">
            <CircleAni/>
          </section>
            <Product id="product" ref={(el) => {sectionRef.current['product']= el}}/>
            <About id="about" ref={(el) => {sectionRef.current['about']= el}}/>
            <Contact id="contact" ref={(el) => {sectionRef.current['contact']= el}}/>
      </main>
       <footer className="w-full rounded-md bg-bg/90 backdrop-blur-lg border-t border-white/70 shadow-md shadow-amber-50 p-6 mt-6 font-serif text-center relative">
            <p className="text-muted text-base">"Lemon drink" started with a simple but meaningful purpose-to provide the best and putest fruit flavor for everyone.</p>
            <button 
            onClick={() => { scrollTo({ top: 0, behavior: 'smooth' })}}
            className="absolute bottom-6 right-6">
              <FaArrowCircleUp size={26} className="text-primaryt hover:-translate-y-2 duration-100 transition-all"/>
            </button>
        </footer>
    </div>
  )
}
export default App;
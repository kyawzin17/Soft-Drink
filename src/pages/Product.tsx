import Lemon from "../photo/In-season-August-Lemons-500x332.png";
import Leaf from "../photo/leaf.png";
import Ilemon from "../photo/images.png";
import { motion } from "framer-motion";

import { forwardRef, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProductProps {
    id: string;
}
const Product= forwardRef<HTMLElement, ProductProps>(({id}, ref) => {

    const leftRef = useRef<HTMLDivElement>(null);
    const productRef= useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(leftRef.current, {
            y: 100,
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: productRef.current,
                start: "top 60%",
            },
        })

        
    }, { scope: productRef});

  return (
        <section id={id} ref={ref} className="py-16 w-full h-auto px-6 scroll-mt-18">
            <div ref={productRef} className="max-w-6xl h-auto mx-auto flex flex-row justify-between items-center flex-wrap">
                        <div className="relative flex justify-between items-center w-125 h-110">
                            <motion.h2 
                                animate={{ rotate: [0, 30, 0, -30, 0] }}  
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}    
                                className="text-4xl text-(--primary) font-bold w-50 font-serif italic text-center text-ani">Refreshing and</motion.h2>
                            <motion.h2
                                animate={{ rotate: [0, 30, 0, -30, 0] }}  
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}     
                                className="text-4xl text-(--primary) font-bold w-40 font-serif italic text-center text-ani">Natural taste</motion.h2>
                            <img src={Lemon} className="w-40 absolute top-[70%] left-[42%] -translate-1/2" alt="lemon img" />
                            <img src={Lemon} className="w-40 absolute top-[70%] left-[66%] -translate-1/2 -scale-x-100" alt="lemon img" />   
                        </div>
                        {/* Second section card */}
                        <motion.div 
                        whileHover={{ y: -16 }} ref={leftRef} className="p-4 me-8 w-80 border-2 border-gray-600 rounded-lg bg-card/50 backdrop-blur-2xl grid grid-cols-2 gap-1 shadow-md hover:shadow-secondary/80 ">
                            <div className="col-span-2 py-1 mb-2">
                                <span className="text-(--primary) float-left">SUSTAINABILITY</span>
                                <span className="text-(--accent-lime) float-right">Getting</span>
                            </div>
                            <div className="col-span-2 p-2 rounded-md bg-teal-950 flex justify-between items-center">
                                <div className="bg-body w-14 h-17 flex flex-col items-center">
                                    <img src={Leaf} className="w-10 h-10" />
                                    <h3 className="m-0 p-0 text-primaryt">100</h3>
                                    <p className="text-sm text-muted">Sweetness</p>
                                </div>
                                <div className="w-px h-12 bg-gray-700"></div>
                                <div className="bg-body w-14 h-17 flex flex-col items-center">
                                    <img src={Leaf} className="w-10 h-10" />
                                    <h3 className="m-0 p-0 text-primaryt">150</h3>
                                    <p className="text-sm text-muted">Reflesh</p>
                                </div>
                                <div className="w-px h-12 bg-gray-700"></div>
                                <div className="bg-body w-14 h-17 flex flex-col items-center">
                                    <img src={Leaf} className="w-10 h-10" />
                                    <h3 className="m-0 p-0 text-primaryt">100%</h3>
                                    <p className="text-sm text-muted">Fruitiness</p>
                                </div>
                            </div>
                            <div className="bg-teal-950 p-2 rounded-md flex flex-col">
                                <div className="flex justify-between">
                                <img src={Ilemon} className="w-14 h-10" />
                                    <img src={Leaf} className="w-4 h-4" />
                                </div>
                                <h2 className="m-0 p-0 text-center text-green-300">82%</h2>
                                <p className="text-sm text-center text-(--accent-lime)">Lemon</p>
                            </div>
                            
                            <div className="bg-teal-950 p-2 rounded-md flex flex-col">
                                <div className="flex justify-between">
                                    <img src={Leaf} className="w-10 h-10" />
                                    <img src={Leaf} className="w-4 h-4" />
                                </div>
                                <h2 className="m-0 p-0 text-center text-green-300">18%</h2>
                                <p className="text-sm text-center text-(--accent-lime)">Other test</p>
                            </div>
                            
                        </motion.div>
            </div>
        </section>
  )
})

export default Product;
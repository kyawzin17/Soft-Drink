import "../App.css"
import { FaCartPlus, FaRegUser, FaRegBell } from "react-icons/fa";
import { useEffect, useState } from "react";

interface HeadProp {
    active: string,
    setActive: any,
    setCart: any,
    setUser: any,
    setNoti: any,
}
const Header: React.FC<HeadProp> =({active, setActive, setCart, setUser, setNoti}) => {
    const [ headerShadow, setHeaderShadow ]= useState<boolean>(false);    
    useEffect(() => {
        const handleScroll= () => {
           if (window.scrollY > 10) {
            setHeaderShadow(true);
           } else {
            setHeaderShadow(false);
           }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className={`w-full h-16 px-5 md:px-10 lg:px-30 rounded-md flex justify-between items-center sticky left-0 top-0 z-1000 bg-black/3 backdrop-blur-md ${headerShadow ? "shadow-md shadow-yellow-500/30" : ""}`}>
            <div className="flex items-end">
                <p className="logo font-extrabold text-4xl font-serif">
                    RD
                </p>
                <p className="text-[14px] font-serif text-white">
                    Soft drink!
                </p>
            </div>
            <nav className="head-nav hidden md:flex gap-2 text-sm relative">
                <a href="#home"
                    onClick={() => setActive("home")} className={`head-link ${active === "home" ? "text-primaryt" : "text-softt"}`}>Home</a>
                <a href="#product"
                    onClick={() => setActive("product")} className={`head-link ${active === "product" ? "text-primaryt" : "text-softt"}`}>Product</a>
                <a href="#about"
                    onClick={() => setActive("about")} className={`head-link ${active === "about" ? "text-primaryt" : "text-softt"}`}>About</a>
                <a href="#contact"
                    onClick={() => setActive("contact")} className={`head-link ${active === "contact" ? "text-primaryt" : "text-softt"}`}>Contact</a>
                <div className="absolute bottom-0 h-0.5 rounded-lg bg-softt transition-all duration-300" style={{ left: active === "home" ? "1%" : active === "product" ? "26%" : active === "about" ? "53%" : "78%", width: active === "home" ? "18%" : active === "product" ? "20%" : active === "about" ? "18%" : "20%"}}></div>
            </nav>
            <div className="flex items-center gap-4 text-lg">
                <button id="shopingCart"
                        onClick={() => setCart(true)}
                         className="text-white p-1.5 bg-white/10 border border-white/70 hover:border-secondary backdrop-blur-md cursor-pointer rounded-md">
                    <FaCartPlus size={20}/>
                </button>
                <button id="userInfo"
                        onClick={() => setUser(true)}
                         className="text-white p-1.5 bg-white/10 border border-white/70 hover:border-secondary backdrop-blur-md cursor-pointer rounded-md">
                    <FaRegUser size={20}/>
                </button>
                <button id="bellIcon" 
                        onClick={() => setNoti(true)}
                        className="fa-regular fa-bell relative text-white p-1.5 bg-white/10 border border-white/70 hover:border-secondary backdrop-blur-md cursor-pointer rounded-md">
                    <FaRegBell size={20}/>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></span>
                </button>              
            </div>
        </header>
    )
}

export default Header;
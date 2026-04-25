import "../App.css"
import { FaCartPlus, FaRegUser, FaRegBell } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header: React.FC =() => {
    const [ headerShadow, setHeaderShadow ]= useState<boolean>(false);
    useEffect(() => {
        const handleScroll= () => {
           if (window.scrollY > 10) {
            setHeaderShadow(true);
            console.log("this is true");
           } else {
            setHeaderShadow(false);
            console.log("this is false");
           }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className={`w-full h-16 px-5 md:px-10 lg:px-30 flex justify-between items-center sticky left-0 top-0 z-1000 bg-black/3 backdrop-blur-md ${headerShadow ? "shadow-md shadow-yellow-500/30" : ""}`}>
            <div className="flex items-end">
                <p className="logo font-extrabold text-4xl font-serif">
                    RD
                </p>
                <p className="text-[14px] font-serif text-white">
                    Soft drink!
                </p>
            </div>
            <nav className="head-nav hidden md:flex gap-2 text-sm">
                <a href="#home" className="head-link active-link text-sm">Home</a>
                <a href="#product" className="head-link">Product</a>
                <a href="#about" className="head-link">About</a>
                <a href="#contact" className="head-link">Contact</a>
            </nav>
            <div className="flex items-center gap-4 text-lg">
                <button id="shopingCart" className="text-white p-1.5 bg-white/10 border-1 border-white/70 backdrop-blur-md cursor-pointer rounded-md">
                    <FaCartPlus size={20}/>
                </button>
                <button id="userInfo" className="text-white p-1.5 bg-white/10 border-1 border-white/70 backdrop-blur-md cursor-pointer rounded-md">
                    <FaRegUser size={20}/>
                </button>
                <button id="bellIcon" className="fa-regular fa-bell relative text-white p-1.5 bg-white/10 border-1 border-white/70 backdrop-blur-md cursor-pointer rounded-md">
                    <FaRegBell size={20}/>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></span>
                </button>              
            </div>
        </header>
    )
}

export default Header;
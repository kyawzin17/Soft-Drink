import { FaArrowCircleLeft, FaPlus, FaMinus } from "react-icons/fa";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import backgroundColor from "../photo/background-sd.png";
import softDrink from "../photo/bottle-sd.png";

import { useEffect, useState } from "react";

interface CartProp {
    cart: boolean,
    setCart: any,
}
const Cart: React.FC<CartProp> =(({cart, setCart}) => {

    const [ count, setCount ]= useState<number>(1);
    const [ totalPrice, setTotalPrice ]= useState<number>(0);

    useEffect(() => {
        setTotalPrice(count * 0.67);
    }, [count]);

    return (
        <section
        style={{ backgroundImage: `url(${backgroundColor})` }}
         className={`w-full h-screen overflow-hidden flex flex-col justify-between fixed left-0 ${cart ? "top-0" : "-top-full"} bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out rounded-b-md z-1001 border-b border-white`}>
            <header className="w-full h-16 flex justify-start items-center px-6">
                <FaArrowCircleLeft onClick={() => setCart(false)} size={24} className="text-white hover:text-white/70 hover:scale-104 transition-all duration-200 ease-in-out cursor-pointer"/>
            </header>
            <main className="flex-1 w-full flex flex-col items-center justify-center mx-auto px-6 flex-wrap gap-6">
                <div className="w-full">
                    <h2 className="text-4xl font-semibold font-serif text-center text-primary mb-6 ms-22">RD LEMON</h2>
                </div>
                <div className="max-w-7xl flex items-center gap-4 flex-wrap justify-center">
                    <div className="w-86 h-auto border-2 border-white/90 backdrop-blur-lg bg-bg/30 rounded-lg py-4 px-2 hover:shadow-lg shadow-primary transition-all hover:-translate-y-2 duration-300">
                        <h3 className="text-md font-bold font-serif text-primary py-2">
                            INGREDIENTS (အဝါ‌ရောင်)
                        </h3>
                        <ul className="list-disc list-inside text-primaryt text-sm font-serif gap-1.5 flex flex-col">
                            <li>Water (ရေ)</li>
                            <li>Sugar (သကြား)</li>
                            <li>Fresh Lemon Juice (လတ်ဆတ်သော လီမွန်ဖျော်ရည်)</li>
                            <li>Mint Extract (ပူဒီနာ အဆီအနစ်)</li>
                            <li>Vitamin C (ဗီတာမင် စီ)</li>
                        </ul>
                        <h3 className="text-md font-bold font-serif text-primary py-2 mt-4">
                            BENEFTTS (အဝါ‌ရောင်)
                        </h3>
                        <ul className="list-disc list-inside text-primaryt text-sm font-serif flex flex-col gap-1.5">
                            <li>Instantly Refreshing (ချက်ချင်း လန်းဆန်းစေသည်)</li>
                            <li>Vitamin C Boost (ဗီတာမင် စီ ဖြည့်တင်းပေးသည်)</li>
                            <li>Natural Energy(သဘာဝအတိုင်း စွမ်းအင် ပေးသည်)</li>
                        </ul>
                    </div>
                    <div className="max-w-80 h-90 border border-white/80 overflow-hidden rounded-md hover:shadow-lg shadow-primary transition-all hover:-translate-y-4 duration-300">
                        <img src={softDrink} alt="Soft Drink" className="w-100 -mt-10 h-120 object-cover object-center rounded-md"/>
                    </div>
                    <div className="w-60 flex flex-col gap-2">
                        <div className="w-full h-30 border-2 flex flex-col border-white/90 backdrop-blur-lg bg-bg/30 rounded-lg py-2 hover:shadow-lg shadow-primary transition-all hover:-translate-y-2 duration-300">
                            <h3 className="text-md font-bold font-serif text-primaryt text-center">SELECT QUANTITY</h3>
                            <div className="w-full flex justify-center items-center gap-4 mt-2">
                                <button 
                                 onClick={() => setCount(count - 1)}
                                 className="px-2 py-2 bg-transparent text-primary rounded-md border border-primary hover:bg-bg transition-all hover:scale-106 duration-200">
                                    <FaMinus size={14}/>
                                </button>
                                <span className="text-xl font-semibold text-primaryt">{count}</span>
                                <button
                                 onClick={() => setCount(count + 1)}
                                 className="px-2 py-2 bg-transparent text-primary rounded-md border border-primary hover:bg-bg transition-all hover:scale-106 duration-200">
                                    <FaPlus size={14}/>
                                </button>
                            </div>
                            <div className="w-full flex justify-center mt-2 gap-2">
                                <span className="text-lg font-semibold text-primaryt">Total:</span>
                                <span className="text-lg font-semibold text-primaryt">$ {totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="w-full text-center py-2 bg-primary text-lg text-bg font-bold rounded-md hover:bg-transparent hover:border-3 hover:border-primary hover:text-primary transition-colors duration-300">ORDER NOW</button>
                    </div>
                </div>
            </main>
            <footer className="w-full h-10 flex justify-center items-center px-6">
                <RiArrowUpDoubleFill onClick={() => setCart(false)} size={34} className="text-white hover:scale-104 hover:-translate-y-2 ms-22" />
            </footer>
        </section>
    )
})
export default Cart;
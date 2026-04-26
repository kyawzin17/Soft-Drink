import { FaLocationArrow, FaPhone, FaClock, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React,{ forwardRef, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ContactProps {
    id: string;
}

const Contact= forwardRef<HTMLElement, ContactProps>(({id}, ref) => {

    const contactRef= useRef<HTMLDivElement>(null);
     const formRef = useRef<HTMLFormElement>(null);
     
    const publicKey= import.meta.env.VITE_PUBLIC_KEY || "";
    const serviceId= import.meta.env.VITE_SECRET_ID || "";
    const templateId= import.meta.env.VITE_TEMPLATE_ID || "";

    const [send, setSend] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [err, setErr] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!name.trim() || !email.trim() || !message.trim()) {
            toast.error("Please fill in all fields");
            return;
        }
        
        if (!formRef.current) return; // Form ref မရှိရင် ဘာမှမလုပ်ဖို့ စစ်ဆေးခြင်း

        setSend(true);
        
        emailjs.sendForm(serviceId, templateId, formRef.current, {
                publicKey,
            })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setIsConfirmed(true);
                    setSend(false);
                    setErr(null);
                },
                (error) => {
                    toast.error("Failed to send message. Please try again.");
                    setIsConfirmed(false);
                    setSend(false);
                    setErr(error.text);
                },
            );
    };


    useGSAP(() => {
        const tl= gsap.timeline({ defaults: { ease: "back.out(1.5)"}, scrollTrigger: {
                                                                                        trigger: contactRef.current,
                                                                                        start: "top 80%",
                                                                                        end: "bottom 20%",
                                                                                    }});

        tl.from(".contact-title", {
            y: -70,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
        })
        .from(".contact-under", {
            scaleX: 0,
            duration: 0.6
        })
        .from(".contact-left", {
            y: 100,
            opacity:0,
            duration: 0.6
        })
        .from(".contact-right", {
            y: 100,
            opacity:0,
            duration: 0.6
        })
    }, {scope: contactRef});

    return (
        <section id={id} ref={ref} className="w-full h-auto py-16 px-6 scroll-mt-16">
            <div ref={contactRef} className="max-w-6xl h-auto mx-auto">
                <div className="w-full h-auto flex flex-col items-center justify-center mb-12">
                    <h1 className="contact-title text-3xl text-secondary text-center font-bold">Contact Us</h1>
                    <p className="contact-under text-softt text-md">✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
                </div>
                <div className="w-full h-auto flex flex-col md:flex-row justify-around items-center gap-4">
                        <div className="contact-left w-100 mb-5">
                            <h2 className="text-3xl text-(--primary) font-bold mb-10">Contact Information</h2>
                            <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-md">
                                <div className="flex justify-between">
                                    <p className="text-primaryt text-md flex items-center gap-1"><FaLocationArrow /> <strong>Adress:</strong></p>
                                    <p className="text-white/70 py-1 text-sm">No. 123, Pyay Road, Yangon, Myanmar.</p>
                                </div> 
                                <div className="flex justify-between">
                                    <p className="text-primaryt text-md flex items-center gap-1"><FaPhone /> <strong>Phone:</strong></p>
                                    <p className="text-white/70 py-1 text-sm">+95 123 456 789</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-primaryt text-md flex items-center gap-1"><MdEmail /> <strong>Email:</strong></p>
                                    <p className="text-white/70 py-1 text-sm">reddargon@limondrink.com</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-primaryt text-md flex items-center gap-1"><FaClock /> <strong>Business Hours:</strong></p>
                                    <p className="text-white/70 py-1 text-sm">Mon-Fri 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-md mt-4">
                               <div className='w-full flex justify-between items-center'>
                                     <h2 className="text-white/80 text-md font-semibold">Follow Our Sparple</h2>
                                    <div className="flex gap-4 mt-3">
                                        <FaFacebook size={20} className='text-primaryt hover:-translate-y-2 transition-all duration-150 cursor-pointer hover:text-blue-600'/>
                                        <FaInstagram size={20} className='text-primaryt hover:-translate-y-2 transition-all duration-150 cursor-pointer hover:text-pink-500'/>
                                        <FaTwitter size={20} className='text-primaryt hover:-translate-y-2 transition-all duration-150 cursor-pointer hover:text-sky-400'/>
                                        <FaYoutube size={20} className='text-primaryt hover:-translate-y-2 transition-all duration-150 cursor-pointer hover:text-red-600'/>
                                    </div>
                               </div>
                                <p className="text-sm text-white/40 mt-1">@reddargon Official</p>
                            </div>
                        </div>
                        <div className="contact-right w-100 mt-10 p-6 border border-white/20 rounded-md bg-white/5 backdrop-blur-lg">
                            <form id="contactForm"
                             ref={formRef} 
                             onSubmit={sendEmail}
                             className="w-full flex flex-col gap-3">
                                <h2 className="text-2xl text-primary font-bold mb-4 text-shadow-primaryt text-shadow-xs">Send Us a Message</h2>
                                <input type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        name="name" placeholder="Full Name" className="w-full p-2 rounded-md border-b-2 border-secondary text-white focus:outline-none focus:border focus:border-primary" required/>
                                <input type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                         name="email" placeholder="Enter your email" className="w-full p-2 rounded-md border-b-2 border-secondary text-white focus:outline-none focus:border-primary" required/>
                                <textarea name="message"
                                            onChange={(e) => setMessage(e.target.value)}
                                            value={message}
                                             placeholder="Enter your message here..." className="w-full p-2 rounded-md border-2 border-secondary text-white focus:outline-none focus:border-primary mb-2" required> </textarea>
                                {/* Status Messages */}
                        {isConfirmed && (
                            <div className="text-green-600 text-sm font-medium text-center">
                                ✅ You sent a message to me!
                            </div>
                        )}
                        {err && (
                            <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium rounded-lg text-center">
                                ❌ {err}
                            </div>
                        )}
                                <button type="submit"
                                        disabled={send} 
                                        className="w-full rounded-md bg-(--secondary) text-(--bg-primary) font-semibold font-serif cursor-pointer hover:bg-transparent hover:scale-101 transition-all duration-300 hover:border-(--secondary) hover:border-2 hover:text-(--text-primary) text-center py-2">
                                    {send ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : "Let's Go!"}
                                </button>
                            </form>
                        </div>
                </div>
            </div>
        </section>
    )
});

export default Contact;
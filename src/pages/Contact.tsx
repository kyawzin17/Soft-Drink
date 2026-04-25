import { FaLocationArrow, FaPhone, FaClock, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
export default function Contact() {

    return (
            <div className="max-w-6xl h-auto mx-auto">
                <div className="w-full h-auto flex flex-col items-center justify-center mb-12">
                    <h1 className="text-3xl text-secondary text-center font-bold">Contact Us</h1>
                    <p className="text-softt text-md">✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
                </div>
                <div className="w-full h-auto flex flex-col md:flex-row justify-around items-center gap-4">
                        <div className="w-100 mb-5 md:mb-0">
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
                                        <FaFacebook size={20} className='text-primaryt hover:translate-y-[-8px] transition-all duration-150 cursor-pointer hover:text-blue-600'/>
                                        <FaInstagram size={20} className='text-primaryt hover:translate-y-[-8px] transition-all duration-150 cursor-pointer hover:text-pink-500'/>
                                        <FaTwitter size={20} className='text-primaryt hover:translate-y-[-8px] transition-all duration-150 cursor-pointer hover:text-sky-400'/>
                                        <FaYoutube size={20} className='text-primaryt hover:translate-y-[-8px] transition-all duration-150 cursor-pointer hover:text-red-600'/>
                                    </div>
                               </div>
                                <p className="text-sm text-white/40 mt-1">@reddargon Official</p>
                            </div>
                        </div>
                        <div className="w-100 md:mt-0 mt-10 p-6 border border-white/20 rounded-md bg-white/5 backdrop-blur-lg">
                            <form id="contactForm" className="w-full flex flex-col gap-3">
                                <h2 className="text-2xl text-primary font-bold mb-4 text-shadow-primaryt text-shadow-xs">Send Us a Message</h2>
                                <input type="text" name="name" placeholder="Full Name" className="w-full p-2 rounded-md border border-gray-700 text-gray-200 focus:outline-none" required/>
                                <input type="text" name="email" placeholder="Enter your email" className="w-full p-2 rounded-md border border-gray-700 text-gray-200 focus:outline-none" required/>
                                <textarea name="message" placeholder="Enter your message here..." className="w-full p-2 rounded-md border border-gray-700 text-gray-200 focus:outline-none" required> </textarea>
                                <span id="formMessage" className="text-sm text-green-400 hidden">Email sent successfully!</span>
                                <span id="formError" className="text-sm text-red-500 hidden">Failed to send email. Please try again.</span>
                                <button type="submit" className="w-full rounded-md bg-(--secondary) text-(--bg-primary) font-semibold font-serif cursor-pointer hover:bg-transparent hover:scale-101 transition-all duration-300 hover:border-(--secondary) hover:border-2 hover:text-(--text-primary) text-center py-2">Send</button>
                            </form>
                        </div>
                </div>
            </div>
    )
    }
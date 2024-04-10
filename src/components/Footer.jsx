import React from "react";

const Footer = () => {
    return (
        <>
        <section className="bg-burgundy-500 text-white font-raleway pt-10 lg:px-24 md:px-10 px-3">
            <div className="flex justify-between items-center flex-wrap gap-10">
                <div className="flex flex-wrap justify-between items-center gap-10">
                    <div>
                        <h4 className="font-semibold text-2xl">NEWSLETTER SUBSCRIBE</h4>
                        <p className="font-lato font-medium mt-2">
                            Sign Up and receive 10% off Wedding cost
                        </p>
                    </div>
                    <div className=" bg-burgundy-100/40 relative flex rounded w-full md:w-[417px]">
                        <input className="bg-transparent p-4 w-full" type="text" name="Email" id="email" placeholder="Email" />
                        <button className=" absolute right-0 px-6 py-4 bg-burgundy-100 rounded-md">send</button>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a href="#">
                        <img src="assets/icons/twitter.svg" alt="" />
                    </a>
                    <a href="#">
                        <img src="assets/icons/facebook.svg" alt="" />
                    </a>
                    <a href="#">
                        <img src="assets/icons/instagram.svg" alt="" />
                    </a>
                    <a href="#">
                        <img src="assets/icons/github.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="flex lg:gap-32 md:gap-20 gap-10 items-center flex-wrap">
                <a href="#" className="flex items-center">
                    <img className="w-full" src="assets/images/wblogo2.png" alt="Wedding buddy Logo" />
                </a>
                <div className="space-y-3">
                    <h4 className="font-semibold text-2xl font-raleway">PHONE AND EMAIL</h4>
                    <p className="font-lato">hello@weddingbuddy.com</p>
                    <p className="font-lato">+234 9039 446 987</p>
                </div>
                <div className="md:mt-24 space-y-3">
                    <h4 className="font-semibold text-2xl font-raleway">PAGES</h4>
                    <a className="block font-lato" href="#">Home</a>
                    <a className="block font-lato" href="#">Services</a>
                    <a className="block font-lato" href="#">Portfolio</a>
                    <a className="block font-lato" href="#">Vendors </a>
                    <a className="block font-lato" href="#">Contact Us</a>
                </div>
                <div>

                </div>

            </div>
        </section>
         <footer className="bg-burgundy-500 border-t border-black text-white text-center">
         <p className="py-8 font-lato"> Copyrights 2024. All rights reserved</p>
     </footer>
     </>
    );
};

export default Footer;

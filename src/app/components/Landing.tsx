"use client";

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { useState, lazy, Suspense } from "react";

const Nav = lazy(() => import("./Nav"));
const Contact = lazy(() => import("./Contact"));

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContact, setIsContact] = useState(false);

    return (
        <main className="w-full h-screen flex justify-center items-center m-0 p-0 relative">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
            >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {isOpen ? (
                <RxCross1
                    className="absolute z-20 top-5 right-5 text-white text-5xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    size={75}
                />
            ) : (
                <CiMenuBurger
                    className="absolute z-20 top-5 right-5 text-white text-5xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    size={75}
                />
            )}
            <div className="relative z-10 w-full h-screen flex justify-center items-center">
                {isOpen ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Nav />
                    </Suspense>
                ) : (
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={600}
                        height={300}
                    />
                )}
            </div>
            <CiMail
                className="absolute z-30 bottom-20 right-10 cursor-pointer bg-transparent rounded-full p-5 outline outline-2 outline-white hover:bg-black hover:outline-0"
                size={75}
                color="white"
                onClick={() => setIsContact(!isContact)}
            />
            <div className="">
                {isContact && (
                    <div className="absolute z-50 top-0 right-0 w-1/4 h-screen flex flex-col items-center justify-center bg-[#1c1e1f]">
                        <RxCross1
                            className="absolute top-10 right-10 cursor-pointer"
                            onClick={() => setIsContact(!isContact)}
                            size={30}
                            color="#0c6f53"
                        />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Contact />
                        </Suspense>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Landing;

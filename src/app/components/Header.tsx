"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const [scrollingUp, setScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setScrollingUp(true);
            } else {
                setScrollingUp(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-black text-white p-4 transition-transform duration-300 flex flex-row justify-between items-center ${
                scrollingUp ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Image src="/logo.png" alt="logo" width={300} height={300} />
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
        </header>
    );
};

export default Header;

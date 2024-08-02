"use client";

import home1 from "../../../public/home1.jpg";
import home2 from "../../../public/home2.jpg";
import home3 from "../../../public/home3.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";

const homes = [home1, home2, home3];

const Images = () => {
    const [src, setSrc] = useState(homes[0]);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % homes.length);
                setFade(true);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setSrc(homes[index]);
    }, [index]);

    return (
        <div className="flex flex-row justify-center items-center">
            <Image
                src={src}
                alt="home"
                width={1000}
                height={1000}
                className={`transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default Images;

import { lazy, Suspense } from "react";

const Images = lazy(() => import("./Images"));

const About = () => {
    return (
        <main className="w-full h-screen flex flex-col lg:flex-row justify-between items-center gap-10">
            <section className="px-20 h-[65%] lg:w-1/2 w-full flex flex-col justify-around lg:justify-between items-start order-2 lg:order-1">
                <h2 className="text-4xl tracking-widest uppercase">
                    Lorem ipsum dolor{" "}
                    <span className="font-bold">adipisicing</span>
                </h2>
                <p className="leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum doloribus et nostrum asperiores nulla!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ratione ea, vel dicta hic sunt unde fugiat. Repellat
                    molestias non distinctio. Ullam, aliquam nemo temporibus
                    optio illo qui ea similique eveniet. Illo blanditiis maxime
                    ducimus. Aperiam.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga, adipisci.
                </p>
                <button className="text-green-900 border-2 border-green-900 py-5 px-10 hover:bg-green-900 hover:text-white transition-colors">
                    OUR HERITAGE
                </button>
            </section>
            <section className="h-[65%] lg:w-1/2 w-full order-1 lg:order-2 flex justify-center items-center">
                <Suspense fallback={<div>Loading...</div>}>
                    <Images />
                </Suspense>
            </section>
        </main>
    );
};

export default About;

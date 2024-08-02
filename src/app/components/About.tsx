import { lazy, Suspense } from "react";

const Images = lazy(() => import("./Images"));

const About = () => {
    return (
        <main className="w-full h-screen flex flex-row justify-center items-center">
            <section className="w-1/2 h-[60%] px-20 flex flex-col justify-between items-start">
                <h2 className="text-4xl tracking-widest uppercase">
                    Lorem ipsum dolor sit amet{" "}
                    <span className="font-bold">consectetur adipisicing</span>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae debitis beatae at iure molestias quam nobis
                    atque, sint perferendis rerum. Quam eligendi saepe
                    temporibus amet voluptatibus incidunt! Eum soluta debitis
                    corporis et optio, voluptas, quo dicta iure velit eos
                    explicabo.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga, adipisci.
                </p>
                <button className="text-green-900 border-2 border-green-900 py-5 px-10 hover:bg-green-900 hover:text-white transition-colors">
                    OUR HERITAGE
                </button>
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Images />
            </Suspense>
        </main>
    );
};

export default About;

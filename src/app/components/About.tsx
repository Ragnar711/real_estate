import { lazy, Suspense } from "react";

const Images = lazy(() => import("./Images"));

const About = () => {
    return (
        <main className="w-full h-screen flex flex-col lg:flex-row justify-between items-center gap-10">
            <section className="px-20 h-[65%] lg:w-1/2 w-full flex flex-col justify-around lg:justify-between items-start order-2 lg:order-1">
                <h2 className="text-4xl tracking-widest uppercase">
                    Welcome to <span className="font-bold">ARA Company</span>
                </h2>
                <p className="leading-7">
                    At ARA Company, we specialize in building Manufacturing
                    Execution Systems (MES) for industries, along with other
                    Industry 4.0 applications and projects. Our solutions are
                    designed to optimize production processes, enhance
                    efficiency, and drive innovation in the industrial sector.
                    <br />
                    <br />
                    With a commitment to excellence and a focus on cutting-edge
                    technology, ARA Company is at the forefront of the Industry
                    4.0 revolution. Our team of experts works tirelessly to
                    deliver customized solutions that meet the unique needs of
                    each client.
                    <br />
                    <br />
                    Join us as we pave the way for the future of industrial
                    automation and smart manufacturing.
                </p>
                <button className="text-green-900 border-2 border-green-900 py-5 px-10 hover:bg-green-900 hover:text-white transition-colors">
                    OUR MISSION
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

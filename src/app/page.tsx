import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./components/Landing"));
const About = lazy(() => import("./components/About"));
const Header = lazy(() => import("./components/Header"));
const Featured = lazy(() => import("./components/Featured"));

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between gap-10">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Landing />
                <About />
                <Featured />
            </Suspense>
        </main>
    );
}

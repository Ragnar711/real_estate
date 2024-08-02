import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./components/Landing"));
const About = lazy(() => import("./components/About"));
const Header = lazy(() => import("./components/Header"));

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Landing />
                <About />
                <About />
                <About />
            </Suspense>
        </main>
    );
}

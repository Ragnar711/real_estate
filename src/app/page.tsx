import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./components/Landing"));

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Suspense fallback={<div>Loading...</div>}>
                <Landing />
            </Suspense>
        </main>
    );
}

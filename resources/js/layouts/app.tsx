import { Header } from "@/components/header";
import { Head } from "@inertiajs/react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head></Head>
            <Header />
            <main className="container mx-auto grid gap-6 px-3 py-6">
                {children}
            </main>
        </>
    );
}

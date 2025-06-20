import { Header } from "@/components/header";
import { Head } from "@inertiajs/react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header />
            <main className="container mx-auto grid gap-6 px-3 py-6">
                {children}
            </main>
        </>
    );
}

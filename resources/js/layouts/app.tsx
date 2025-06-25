import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const page = usePage<SharedData>();

    useEffect(() => {
        const { type, message } = page.props.flash;

        if (type && message) {
            if (type === "success") {
                toast.success(message, { position: "top-center" });
            } else if (type === "error") {
                toast.error(message, { position: "top-center" });
            } else if (type === "info") {
                toast.info(message, { position: "top-center" });
            } else if (type === "warning") {
                toast.warning(message, { position: "top-center" });
            }
        }
    }, [page.props.flash]);

    return (
        <>
            <Header />
            <main className="container mx-auto grid gap-6 px-3 py-6">
                {children}
            </main>
            <Toaster />
        </>
    );
}

import ProductCard from "@/components/product-card";
import { Card } from "@/components/ui/card";
import AppLayout from "@/layouts/app";

export default function Home() {
    const cards = [...Array(5)];

    return (
        <AppLayout>
            <Card className="h-[320px]" />
            <div className="grid gap-3">
                <div className="font-medium">Populer</div>
                <div className="grid grid-cols-5 gap-3">
                    {cards.map((_, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>
            </div>
            <div className="grid gap-3">
                <div className="font-medium">Semua Produk</div>
                <div className="grid grid-cols-5 gap-3">
                    {cards.map((_, index) => (
                        <ProductCard key={index} />
                    ))}
                    {cards.map((_, index) => (
                        <ProductCard key={index} />
                    ))}
                    {cards.map((_, index) => (
                        <ProductCard key={index} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

import ProductCard from "@/components/product-card";
import { Card } from "@/components/ui/card";
import AppLayout from "@/layouts/app";
import { Product } from "@/types";

interface Props {
    featured: Product[];
    products: Product[];
}

export default function Home({ featured, products }: Props) {
    return (
        <AppLayout>
            <Card className="h-[320px]" />
            <div className="grid gap-3">
                <div className="font-medium">Produk Pilihan</div>
                <div className="grid auto-cols-[minmax(200px,1fr)] grid-flow-col gap-3 overflow-x-auto overflow-y-hidden p-3">
                    {featured.map((product, key) => (
                        <ProductCard key={key} product={product} />
                    ))}
                </div>
            </div>
            <div className="grid gap-3">
                <div className="font-medium">Semua Produk</div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3 p-3">
                    {products.map((product, key) => (
                        <ProductCard key={key} product={product} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

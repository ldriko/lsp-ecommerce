import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app";
import { format } from "@/lib/utils";
import { Product } from "@/types";
import { ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";

interface Props {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductPage({ product, relatedProducts }: Props) {
    const [qty, setQty] = useState<number>(1);

    const subtotal = useMemo(() => {
        return product.price * qty;
    }, [product.price, qty]);

    function handleAddQty() {
        setQty((prev) => prev + 1);
    }

    function handleSubQty() {
        setQty((prev) => (prev > 1 ? prev - 1 : 1));
    }

    function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setQty(value);
        } else if (e.target.value === "") {
            setQty(1);
        }
    }

    return (
        <AppLayout>
            <div className="grid gap-6">
                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="w-full max-w-[400px]">
                        <Card className="overflow-hidden p-0">
                            <div className="aspect-square w-full bg-muted">
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>
                        </Card>
                    </div>
                    <Card className="flex-1">
                        <CardHeader>
                            <CardTitle className="text-xl">
                                {product.name}
                            </CardTitle>
                            <CardTitle className="text-2xl font-black">
                                Rp{format.number(product.price)}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="prose prose-sm text-muted-foreground"
                                dangerouslySetInnerHTML={{
                                    __html: product.description,
                                }}
                            ></div>
                        </CardContent>
                    </Card>
                    <div className="w-full max-w-[300px]">
                        <Card>
                            <CardHeader className="flex items-center gap-3">
                                <ShoppingBag className="size-4" />
                                <CardTitle>Keranjang</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-3">
                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        onClick={handleSubQty}
                                    >
                                        -
                                    </Button>
                                    <Input
                                        className="flex-1 text-center"
                                        value={qty}
                                        onChange={handleQtyChange}
                                    />
                                    <Button
                                        variant="outline"
                                        onClick={handleAddQty}
                                    >
                                        +
                                    </Button>
                                </div>
                                <div className="flex justify-between gap-3 text-muted-foreground">
                                    <div>Subtotal</div>
                                    <div>Rp{format.number(subtotal)}</div>
                                </div>
                                <Button className="w-full">
                                    Tambah ke Keranjang
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {relatedProducts.length > 0 && (
                    <div className="grid gap-3">
                        <div className="font-medium">Produk Terkait</div>
                        <div className="grid auto-cols-[minmax(200px,1fr)] grid-flow-col gap-3 overflow-x-auto overflow-y-hidden p-3">
                            {relatedProducts.map((relatedProduct, key) => (
                                <ProductCard
                                    key={key}
                                    product={relatedProduct}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

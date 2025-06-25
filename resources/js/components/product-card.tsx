import { cn, format } from "@/lib/utils";
import { Product } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Props {
    product: Product;
    className?: string;
}

export default function ProductCard({ product, className = "" }: Props) {
    const [addedToCart, setAddToCart] = useState(false);
    const [qty, setQty] = useState<number>(0);

    function handleAddToCart(e: React.MouseEvent) {
        e.preventDefault();
        setAddToCart(true);
        setQty(1);
    }

    function handleIncrement(e: React.MouseEvent) {
        e.preventDefault();
        setQty((prev) => prev + 1);
    }

    function handleDecrement(e: React.MouseEvent) {
        e.preventDefault();
        setQty((prev) => (prev > 0 ? prev - 1 : 0));
        if (qty <= 1) {
            setAddToCart(false);
        }
    }

    return (
        <Link href={`/product/${product.id}`}>
            <Card
                className={cn(
                    "cursor-pointer gap-3 overflow-hidden pb-3",
                    className,
                )}
            >
                <div className="-mt-6 aspect-square border-b bg-muted" />
                <CardHeader className="px-3">
                    <div className="grid gap-1.5">
                        <CardDescription>{product.name}</CardDescription>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                        <CardTitle className="line-clamp-1 pb-1.5">
                            {format.number(product.price)}
                        </CardTitle>
                        <div className="mt-auto flex items-center gap-3 text-xs">
                            {addedToCart ? (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="size-8"
                                        onClick={handleDecrement}
                                    >
                                        -
                                    </Button>
                                    {qty}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="size-8"
                                        onClick={handleIncrement}
                                    >
                                        +
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="size-8"
                                    onClick={handleAddToCart}
                                >
                                    +
                                </Button>
                            )}
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </Link>
    );
}

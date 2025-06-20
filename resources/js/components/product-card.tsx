import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function ProductCard({ className = "" }) {
    const [addedToCart, setAddToCart] = useState(false);
    const [qty, setQty] = useState<number>(0);

    function handleAddToCart() {
        setAddToCart(true);
        setQty(1);
    }

    function handleIncrement() {
        setQty((prev) => prev + 1);
    }

    function handleDecrement() {
        setQty((prev) => (prev > 0 ? prev - 1 : 0));
        if (qty <= 1) {
            setAddToCart(false);
        }
    }

    return (
        <Card className={cn("cursor-pointer overflow-hidden", className)}>
            <div className="-mt-6 aspect-square border-b bg-muted" />
            <CardHeader className="flex justify-between gap-3">
                <div className="grid gap-1.5">
                    <CardDescription>Item A</CardDescription>
                    <CardTitle>20.000</CardTitle>
                </div>
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
            </CardHeader>
        </Card>
    );
}

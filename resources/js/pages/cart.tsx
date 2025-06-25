import CartController from "@/actions/App/Http/Controllers/CartController";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app";
import { format } from "@/lib/utils";
import { CartItem, SharedData } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { Loader2, Minus, Plus, Trash } from "lucide-react";
import React, { useState } from "react";

interface Props {
    cartItems: CartItem[];
}

export default function Cart({ cartItems }: Props) {
    const page = usePage<SharedData>();

    const { data, submit, processing } = useForm({
        cart_items: cartItems.map((item) => ({
            id: item.id,
            product_id: item.product_id,
            user_id: item.user_id,
            qty: item.qty,
            price: item.price,
            product_name: item.product?.name || "",
            product_image: item.product?.image || "",
        })),
    });

    const [updateDebounce, setUpdateDebounce] = useState<NodeJS.Timeout | null>(
        null,
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0,
    );

    function handleQtyChange(index: number, qty: number) {
        if (qty <= 0) {
            return;
        }

        data.cart_items[index].qty = qty;

        handleUpdateCart();
    }

    function handleRemoveItem(e: React.MouseEvent, index: number) {
        e.preventDefault();

        data.cart_items.splice(index, 1);

        console.log(data.cart_items);

        handleUpdateCart();
    }

    function handleUpdateCart() {
        if (updateDebounce) {
            clearTimeout(updateDebounce);
        }

        setUpdateDebounce(
            setTimeout(() => {
                submit(CartController.update());
            }, 1000),
        );
    }

    return (
        <AppLayout>
            <div className="flex gap-6">
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Keranjang</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                            {data.cart_items.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <div>
                                        <div className="aspect-square h-[76px] overflow-hidden rounded-md bg-muted">
                                            <img
                                                src={
                                                    page.props.storage.url +
                                                    item.product_image
                                                }
                                                alt={item.product_name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid flex-1 gap-3 py-1.5">
                                        <CardTitle className="flex justify-between gap-4">
                                            <div>{item.product_name}</div>
                                            <div>
                                                {format.number(item.price)}
                                            </div>
                                        </CardTitle>
                                        <div className="flex justify-end gap-1.5">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) =>
                                                    handleRemoveItem(e, index)
                                                }
                                            >
                                                <Trash />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    handleQtyChange(
                                                        index,
                                                        item.qty - 1,
                                                    )
                                                }
                                            >
                                                <Minus />
                                            </Button>
                                            <Input
                                                className="w-24 text-center"
                                                value={
                                                    data.cart_items[index].qty
                                                }
                                                onChange={(e) =>
                                                    handleQtyChange(
                                                        index,
                                                        parseInt(
                                                            e.target.value,
                                                        ) || 1,
                                                    )
                                                }
                                            />
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    handleQtyChange(
                                                        index,
                                                        item.qty + 1,
                                                    )
                                                }
                                            >
                                                <Plus />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {data.cart_items.length === 0 && (
                                <CardDescription className="text-center">
                                    Keranjang Anda kosong
                                </CardDescription>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div className="min-w-sm">
                    <Card>
                        <CardHeader>
                            <CardTitle>Ringkasan</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-1.5">
                            <CardDescription className="flex justify-between gap-4">
                                <div>Subtotal</div>
                                <div>{format.number(total)}</div>
                            </CardDescription>
                            <CardDescription className="flex justify-between gap-4">
                                <div>Diskon</div>
                                <div>{format.number(0)}</div>
                            </CardDescription>
                            <CardTitle className="flex justify-between gap-4 text-lg">
                                <div className="text-right">Total</div>
                                <div className="text-right">
                                    {format.number(total)}
                                </div>
                            </CardTitle>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={processing}>
                                {processing && (
                                    <Loader2 className="animate-spin" />
                                )}
                                Checkout
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}

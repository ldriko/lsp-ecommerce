import AuthController from "@/actions/App/Http/Controllers/AuthController";
import CartController from "@/actions/App/Http/Controllers/CartController";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app";
import { format } from "@/lib/utils";
import { CartItem, Product, SharedData } from "@/types";
import { router, useForm, usePage } from "@inertiajs/react";
import {
    Check,
    Edit,
    Loader2,
    Minus,
    Plus,
    ShoppingBag,
    Trash,
} from "lucide-react";
import { useEffect, useMemo } from "react";

interface Props {
    product: Product;
    cartItem: CartItem | null;
}

export default function ProductPage({ product, cartItem }: Props) {
    const page = usePage<SharedData>();

    const { data, setData, processing, submit, recentlySuccessful } = useForm({
        product_id: product.id,
        qty: cartItem ? cartItem.qty : 1,
    });

    useEffect(() => {
        if (!cartItem) {
            setData("qty", 1);
        }
    }, [cartItem, setData]);

    const subtotal = useMemo(() => {
        return product.price * data.qty;
    }, [product.price, data.qty]);

    function handleAddQty() {
        setData("qty", data.qty + 1);
    }

    function handleSubQty() {
        setData("qty", data.qty > 1 ? data.qty - 1 : 1);
    }

    function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setData("qty", value);
        } else if (e.target.value === "") {
            setData("qty", 1);
        }
    }

    function handleAddToCart() {
        if (page.props.auth.user === null) {
            return router.visit(AuthController.login.url());
        }

        submit(CartController.updateSingle(), {
            onSuccess() {
                router.reload({ only: ["cartItem"] });
            },
        });
    }

    function handleRemoveFromCart() {
        submit(CartController.destroy(product.id), {
            onSuccess() {
                router.reload({ only: ["cartItem"] });
            },
        });
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
                                        src={
                                            page.props.storage.url +
                                            product.image
                                        }
                                        alt={product.name}
                                        className="h-full w-full object-cover"
                                    />
                                )}
                            </div>
                        </Card>
                    </div>
                    <Card className="flex-1">
                        <CardHeader>
                            <div className="flex justify-between gap-3">
                                <CardTitle className="text-xl">
                                    {product.name}
                                </CardTitle>
                                <Badge variant="outline">
                                    {product.category?.name}
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl font-black">
                                Rp{format.number(product.price)}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-3">
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
                                        size="icon"
                                        onClick={handleSubQty}
                                    >
                                        <Minus />
                                    </Button>
                                    <Input
                                        className="flex-1 text-center"
                                        value={data.qty}
                                        onChange={handleQtyChange}
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={handleAddQty}
                                    >
                                        <Plus />
                                    </Button>
                                </div>
                                <div className="flex justify-between gap-3 text-muted-foreground">
                                    <div>Subtotal</div>
                                    <div>Rp{format.number(subtotal)}</div>
                                </div>
                                <div className="flex gap-3">
                                    <Button
                                        className="flex-1"
                                        disabled={processing}
                                        onClick={handleAddToCart}
                                        variant={
                                            recentlySuccessful
                                                ? "outline"
                                                : "default"
                                        }
                                    >
                                        {processing && (
                                            <Loader2 className="animate-spin" />
                                        )}
                                        {recentlySuccessful && !processing ? (
                                            <>
                                                <Check />
                                                Berhasil disimpan
                                            </>
                                        ) : cartItem ? (
                                            <>
                                                <Edit />
                                                Perbarui Keranjang
                                            </>
                                        ) : (
                                            <>
                                                <Plus />
                                                Tambah ke Keranjang
                                            </>
                                        )}
                                    </Button>
                                    {cartItem && (
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={handleRemoveFromCart}
                                        >
                                            <Trash />
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

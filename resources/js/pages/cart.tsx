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

export default function Cart() {
    return (
        <AppLayout>
            <div className="flex gap-6">
                <div className="flex-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Keranjang</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                            <div className="flex gap-3">
                                <div className="aspect-square rounded-md bg-muted" />
                                <div className="grid flex-1 gap-3 py-1.5">
                                    <CardTitle className="flex justify-between gap-4">
                                        <div>Nama Produk</div>
                                        <div>10.000</div>
                                    </CardTitle>
                                    <div className="flex justify-end gap-1.5">
                                        <Button variant="outline">-</Button>
                                        <Input
                                            className="w-16 text-center"
                                            value="1"
                                        />
                                        <Button variant="outline">+</Button>
                                    </div>
                                </div>
                            </div>
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
                                <div>10.000</div>
                            </CardDescription>
                            <CardTitle className="flex justify-between gap-4 text-lg">
                                <div className="text-right">Total</div>
                                <div className="text-right">10.000</div>
                            </CardTitle>
                        </CardContent>
                        <CardFooter>
                            <Button>Checkout</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}

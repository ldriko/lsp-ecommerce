import OrderController from "@/actions/App/Http/Controllers/OrderController";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AppLayout from "@/layouts/app";
import { format } from "@/lib/utils";
import { Order } from "@/types";
import { Link } from "@inertiajs/react";
import { ArrowLeft, Printer } from "lucide-react";

interface Props {
    order: Order;
}

export default function OrdersShow({ order }: Props) {
    return (
        <AppLayout>
            <Link href={OrderController.index.url()}>
                <Button variant="ghost">
                    <ArrowLeft /> Kembali
                </Button>
            </Link>
            <Card>
                <CardHeader>
                    <div className="flex justify-between gap-3">
                        <div>
                            <div className="text-2xl font-bold">
                                ORDER#{order.id}
                            </div>
                            <div>{format.date(order.created_at)}</div>
                        </div>
                        <div>
                            <a
                                href={OrderController.pdf.url(order.id)}
                                target="_blank"
                            >
                                <Button variant="ghost">
                                    <Printer />
                                    Cetak
                                </Button>
                            </a>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Card>
                        <CardHeader>
                            <CardTitle>Produk yang dibeli</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Produk</TableHead>
                                        <TableHead className="text-right">
                                            Qty
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Total
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order.lines?.map((line) => (
                                        <TableRow key={line.id}>
                                            <TableCell>
                                                {line.product?.name}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {line.qty}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                Rp{format.number(line.price)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell
                                            colSpan={2}
                                            className="text-right"
                                        >
                                            Total
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp{format.number(order.total)}
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </AppLayout>
    );
}

import OrderController from "@/actions/App/Http/Controllers/OrderController";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
} from "@/components/ui/table";
import AppLayout from "@/layouts/app";
import { format } from "@/lib/utils";
import { Order } from "@/types";
import { Link } from "@inertiajs/react";
import { Eye, Printer } from "lucide-react";

interface Props {
    orders: Order[];
}

export default function OrdersIndex({ orders }: Props) {
    return (
        <AppLayout>
            <Card>
                <CardHeader>
                    <CardTitle>Riwayat Pembelian</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <tr>
                                <TableHead>No</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead
                                    colSpan={2}
                                    className="w-[1%] text-right"
                                >
                                    Aksi
                                </TableHead>
                            </tr>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <TableCell>ORDER#{order.id}</TableCell>
                                    <TableCell>
                                        {format.date(order.created_at)}
                                    </TableCell>
                                    <TableCell>
                                        Rp{format.number(order.total)}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Link
                                            href={OrderController.show.url(
                                                order.id,
                                            )}
                                        >
                                            <Button size="sm" variant="ghost">
                                                <Eye />
                                                Detail
                                            </Button>
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <a
                                            href={OrderController.pdf.url(
                                                order.id,
                                            )}
                                            target="_blank"
                                        >
                                            <Button size="sm" variant="ghost">
                                                <Printer />
                                                Cetak
                                            </Button>
                                        </a>
                                    </TableCell>
                                </tr>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AppLayout>
    );
}

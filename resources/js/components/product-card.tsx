import { cn, format } from "@/lib/utils";
import { Product, SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Props {
    product: Product;
    className?: string;
}

export default function ProductCard({ product, className = "" }: Props) {
    const page = usePage<SharedData>();

    return (
        <Link href={`/product/${product.id}`}>
            <Card
                className={cn(
                    "cursor-pointer gap-3 overflow-hidden pb-3",
                    className,
                )}
            >
                <div className="-mt-6 aspect-square border-b bg-muted">
                    <img
                        src={page.props.storage.url + product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <CardHeader className="px-3">
                    <CardDescription>{product.name}</CardDescription>
                    <CardTitle className="line-clamp-1 pb-1.5">
                        {format.number(product.price)}
                    </CardTitle>
                </CardHeader>
            </Card>
        </Link>
    );
}

import AuthController from "@/actions/App/Http/Controllers/AuthController";
import OrderController from "@/actions/App/Http/Controllers/OrderController";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";

export function UserDropdown({ children }: React.PropsWithChildren) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Akun</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <Link href={OrderController.index.url()}>
                        <DropdownMenuItem>Riwayat Pembelian</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <Link href={AuthController.logout.url()}>
                    <DropdownMenuItem>Keluar</DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

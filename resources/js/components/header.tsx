import CartController from "@/actions/App/Http/Controllers/CartController";
import { useAppearance } from "@/hooks/use-appearance";
import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Moon, ShoppingBag, Sun, UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import { UserDropdown } from "./user-dropdown";

export function Header() {
    const { appearance, toggleAppearance } = useAppearance();
    const { auth, name } = usePage<SharedData>().props;

    return (
        <header className="border-b">
            <div className="container mx-auto flex items-center justify-between gap-4 p-3">
                <Link href="/" className="font-bold">
                    {name}
                </Link>
                <div className="flex items-center">
                    {auth.user ? (
                        <>
                            <Link href={CartController.index.url()}>
                                <Button variant="ghost">
                                    <ShoppingBag className="size-5" />
                                </Button>
                            </Link>
                            <UserDropdown>
                                <Button variant="ghost">
                                    <UserCircle className="size-5" />
                                </Button>
                            </UserDropdown>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button variant="ghost">Masuk</Button>
                            </Link>
                            <Link href="/register">
                                <Button variant="ghost">Daftar</Button>
                            </Link>
                        </>
                    )}
                    <Button variant="ghost" onClick={toggleAppearance}>
                        {appearance === "dark" ? (
                            <Moon className="size-5" />
                        ) : (
                            <Sun className="size-5" />
                        )}
                    </Button>
                </div>
            </div>
        </header>
    );
}

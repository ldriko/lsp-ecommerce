import { Loader2, Rocket } from "lucide-react";

import AuthController from "@/actions/App/Http/Controllers/AuthController";
import PageController from "@/actions/App/Http/Controllers/PageController";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { SharedData } from "@/types";
import { Link, useForm, usePage } from "@inertiajs/react";
import InputError from "./input-error";

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { name } = usePage<SharedData>().props;

    const { data, setData, errors, submit, processing } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit(AuthController.login());
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <a
                            href="#"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="flex size-8 items-center justify-center rounded-md">
                                <Rocket className="size-6" />
                            </div>
                        </a>
                        <h1 className="text-xl font-bold">
                            Selamat datang di {name}
                        </h1>
                        <div className="text-center text-sm">
                            Belum punya akun?{" "}
                            <Link
                                href={AuthController.register.url()}
                                className="underline underline-offset-4"
                            >
                                Daftar sekarang
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                id="email"
                                type="email"
                                placeholder="Masukkan email anda"
                                autoFocus
                            />
                            <InputError message={errors.email} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="password">Kata Sandi</Label>
                            <Input
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                id="password"
                                type="password"
                                placeholder="Masukkan kata sandi anda"
                            />
                            <InputError message={errors.password} />
                        </div>
                        <div className="grid gap-3">
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing && (
                                    <Loader2 className="animate-spin" />
                                )}
                                Login
                            </Button>
                            <div className="text-center">
                                <Link href={PageController.home.url()}>
                                    <Button variant="link">Kembali</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="text-center text-xs text-balance text-muted-foreground *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
                Dengan melanjutkan, Anda setuju dengan{" "}
                <a href="#">Ketentuan Layanan</a> dan{" "}
                <a href="#">Kebijakan Privasi</a>.
            </div>
        </div>
    );
}

import { cn } from "@/lib/utils";

export default function InputError({
    className,
    message,
    ...props
}: React.ComponentProps<"p"> & { message: string | undefined }) {
    if (!message) {
        return null;
    }

    return (
        <p className={cn("text-sm text-red-500", className)} {...props}>
            {message}
        </p>
    );
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const format = {
    date(date: Date | string | undefined) {
        if (!date) {
            return "";
        }

        if (typeof date === "string") {
            date = new Date(date);
        }

        return date.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    },
    rawDate(date: Date | undefined) {
        if (!date) {
            return "";
        }

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    },
    number(value: string | number) {
        return new Intl.NumberFormat("id-ID", {
            style: "decimal",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(Number(value));
    },
};

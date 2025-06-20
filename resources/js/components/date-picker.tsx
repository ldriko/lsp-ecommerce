"use client";

import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "@/lib/utils";

export function DatePicker({
    date,
    onChange,
}: {
    date?: Date;
    onChange?: (date: Date | undefined) => void;
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setDate] = React.useState<Date | undefined>(date);

    function handleChange(date: Date | undefined) {
        setDate(date);
        if (onChange) {
            onChange(date);
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    id="date"
                    className="w-full justify-between font-normal"
                >
                    {value ? (
                        format.date(value)
                    ) : (
                        <span className="text-muted-foreground">
                            Pilih tanggal
                        </span>
                    )}
                    <ChevronDownIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
            >
                <Calendar
                    mode="single"
                    selected={value}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                        handleChange(date);
                        setOpen(false);
                    }}
                />
            </PopoverContent>
        </Popover>
    );
}

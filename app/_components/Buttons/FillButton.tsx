
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react/dist/iconify.js";

type ButtonProps = {
    href: string;
    label: string;
    icon: string;
    showIcon?: boolean;
    className?: string;
};

export default function Button({
    href,
    label,
    icon,
    showIcon = true,
    className,
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={twMerge(
                "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-[1px] px-4 py-2 font-bold transition-transform ease-out hover:scale-105 border-light-text/20 text-light-text dark:border-dark-text/20 hover:text-dark-text dark:text-dark-text",
                className,
            )}
        >
            <span
                className={twMerge(
                    "absolute inset-0 z-0 h-full translate-y-9 bg-gradient-to-r from-[#0c1317] via-[#51549e] to-[#97a0c9] transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                )}
            />
            <span className="relative flex items-center justify-center gap-2">
                {label} {showIcon && <Icon icon={icon} className="inline-block size-4" />}
            </span>
        </Link>
    );
}
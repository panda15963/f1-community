import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
                                 padding = "md",
                                 className = "",
                                 children,
                                 ...props
                             }: CardProps) {
    const paddings = {
        none: "",
        sm: "p-3",
        md: "p-5",
        lg: "p-6",
    };

    return (
        <div
            className={`rounded-xl border border-zinc-800 bg-zinc-900 ${paddings[padding]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
}

export default function Button({
                                   variant = "primary",
                                   size = "md",
                                   className = "",
                                   children,
                                   ...props
                               }: ButtonProps) {
    const variants = {
        primary: "bg-white text-black hover:bg-zinc-200",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
        danger: "bg-red-600 text-white hover:bg-red-500",
        ghost: "bg-transparent text-zinc-300 hover:bg-zinc-800",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-3 text-base",
    };

    return (
        <button
            className={`rounded-md font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
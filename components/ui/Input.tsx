import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({
                                  label,
                                  error,
                                  className = "",
                                  id,
                                  ...props
                              }: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-medium text-zinc-300"
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                className={`rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white ${className}`}
                {...props}
            />

            {error && (
                <p className="text-sm text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}
"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}

export default function Modal({
                                  open,
                                  onClose,
                                  title,
                                  children,
                              }: ModalProps) {
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 p-6"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="mb-5 flex items-center justify-between">
                    {title && (
                        <h2 className="text-lg font-semibold">
                            {title}
                        </h2>
                    )}

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-xl text-zinc-500 hover:text-white"
                        aria-label="닫기"
                    >
                        ×
                    </button>
                </div>

                {children}
            </div>
        </div>
    );
}
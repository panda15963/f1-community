"use client";

import { useEffect } from "react";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-[calc(100vh-128px)] items-center justify-center px-6">
            <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
                <div className="mb-4 text-5xl">🏎️</div>

                <h1 className="mb-3 text-2xl font-bold">
                    문제가 발생했습니다
                </h1>

                <p className="mb-6 text-zinc-400">
                    페이지를 불러오는 중 오류가 발생했습니다.
                </p>

                <button
                    onClick={() => reset()}
                    className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
                >
                    다시 시도
                </button>
            </div>
        </main>
    );
}
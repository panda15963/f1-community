"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("로그인 시도:", email);
        alert("로그인 인증 기능을 연결해야 합니다.");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111111] p-8 shadow-2xl shadow-black/50">
                <div className="mb-8 text-center">
                    <div className="mb-5 flex justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E10600] text-2xl font-black italic text-white">
                            F1
                        </div>
                    </div>

                    <h1 className="mb-2 text-3xl font-bold tracking-tight">
                        로그인
                    </h1>

                    <p className="text-sm text-gray-400">
                        F1 Community에 오신 것을 환영합니다.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-200"
                        >
                            이메일
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            autoComplete="email"
                            required
                            className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white placeholder:text-gray-600 outline-none transition focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600]"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-200"
                        >
                            비밀번호
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호를 입력하세요"
                            autoComplete="current-password"
                            required
                            className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white placeholder:text-gray-600 outline-none transition focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#E10600] py-3 font-semibold text-white transition hover:bg-[#B80500] focus:outline-none focus:ring-2 focus:ring-[#E10600] focus:ring-offset-2 focus:ring-offset-[#111111]"
                    >
                        로그인
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    계정이 없으신가요?{" "}
                    <a
                        href="/signup"
                        className="font-semibold text-[#E10600] transition hover:text-red-400"
                    >
                        회원가입
                    </a>
                </p>

                <div className="mt-6 -mx-8 pt-5 text-center">
                    <div className="mb-5 h-px w-full bg-white/10" />

                    <a
                        href="/"
                        className="text-sm text-gray-400 transition hover:text-white"
                    >
                        ← 홈으로 돌아가기
                    </a>
                </div>
            </div>
        </main>
    );
}
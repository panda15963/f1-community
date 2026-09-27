export default function NotFound() {
    return (
        <main className="flex min-h-[calc(100vh-128px)] items-center justify-center px-6">
            <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-center">
                <div className="mb-4 text-5xl">🏁</div>

                <h1 className="mb-3 text-3xl font-bold">
                    404
                </h1>

                <p className="mb-6 text-zinc-400">
                    요청하신 페이지를 찾을 수 없습니다.
                </p>

                <a
                    href="/"
                    className="inline-block rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
                >
                    홈으로 돌아가기
                </a>
            </div>
        </main>
    );
}
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-16">
            <section className="py-20 text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                    Formula 1 Community
                </p>

                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                    F1을 더 깊게,
                    <br />
                    팬들과 함께.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
                    F1 경기 데이터부터 드라이버와 팀 통계,
                    예측과 커뮤니티까지 한곳에서 만나보세요.
                </p>

                <div className="mt-8 flex justify-center gap-3">
                    <Link
                        href="/races"
                        className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                    >
                        레이스 보기
                    </Link>

                    <Link
                        href="/community"
                        className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium transition hover:bg-zinc-900"
                    >
                        커뮤니티
                    </Link>
                </div>
            </section>
        </div>
    );
}
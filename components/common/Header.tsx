import Link from "next/link";

const navItems = [
    { label: "홈", href: "/" },
    { label: "레이스", href: "/races" },
    { label: "드라이버", href: "/drivers" },
    { label: "팀", href: "/teams" },
    { label: "순위", href: "/standings" },
    { label: "커뮤니티", href: "/community" },
    { label: "예측", href: "/prediction" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold">
                    F1 Community
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-zinc-300 transition hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="rounded-md px-3 py-2 text-sm text-zinc-300 hover:text-white"
                    >
                        로그인
                    </Link>

                    <Link
                        href="/signup"
                        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
                    >
                        회원가입
                    </Link>
                </div>
            </div>
        </header>
    );
}
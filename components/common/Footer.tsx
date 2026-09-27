export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="font-semibold">F1 Community</p>
                        <p className="mt-1 text-sm text-zinc-500">
                            Formula 1 Community Platform
                        </p>
                    </div>

                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} F1 Community
                    </p>
                </div>
            </div>
        </footer>
    );
}
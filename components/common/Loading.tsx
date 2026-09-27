interface LoadingProps {
    text?: string;
}

export default function Loading({
                                    text = "Loading...",
                                }: LoadingProps) {
    return (
        <div className="flex min-h-[200px] items-center justify-center">
            <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-700 border-t-white" />
                <span className="text-sm text-zinc-400">{text}</span>
            </div>
        </div>
    );
}
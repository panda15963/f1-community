export function cn(
    ...classes: Array<
        string | false | null | undefined
    >
): string {
    return classes.filter(Boolean).join(" ");
}

export function formatNumber(
    value: number
): string {
    return new Intl.NumberFormat("ko-KR").format(
        value
    );
}

export function formatDate(
    date: Date | string
): string {
    return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}
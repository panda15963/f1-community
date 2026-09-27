import type { Metadata } from "next";
import "../styles/globals.css";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const metadata: Metadata = {
    title: "F1 Community",
    description: "Formula 1 community platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className="flex min-h-screen flex-col bg-black text-white antialiased">
        <Header />

        <main className="flex-1">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}
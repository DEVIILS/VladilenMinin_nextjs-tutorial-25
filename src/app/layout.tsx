import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/UI/header";
import { siteConfig } from "@/config/site.config";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${interSans.variable} antialiased`}>
                <Providers>
                    <Header />
                    <main className="flex flex-col h-[calc(100vh-60px-80px)] items-center justify-start">
                        {children}
                    </main>
                    <footer className="flex justify-center items-center h-20">
                        <p>{siteConfig.description}</p>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}

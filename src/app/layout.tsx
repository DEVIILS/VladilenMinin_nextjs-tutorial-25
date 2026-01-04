import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/UI/layout/header";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";

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
                    <main
                        className={`flex flex-col w-full items-center justify-start h-[calc(100vh-${layoutConfig.headerHeight}-${layoutConfig.footerHeight})]`}>
                        {children}
                    </main>
                    <footer
                        className={`flex justify-center items-center h-[${layoutConfig.footerHeight}]`}>
                        <p>{siteConfig.description}</p>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}

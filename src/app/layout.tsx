import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/UI/layout/header";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en">
            <body className={`${interSans.variable} antialiased`}>
                <Providers>
                    <SessionProvider session={session}>
                        <Header />
                        <main
                            className={`flex flex-col w-full items-center justify-start `}
                            style={{
                                height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`,
                            }}>
                            {children}
                        </main>
                        <footer
                            className={`flex justify-center items-center`}
                            style={{
                                height: `${layoutConfig.footerHeight}`,
                            }}>
                            <p>{siteConfig.description}</p>
                        </footer>
                    </SessionProvider>
                </Providers>
            </body>
        </html>
    );
}

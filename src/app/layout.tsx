import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/UI/layout/header";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import AppLoader from "@/hoc/app-loader";
import Title from "@/components/UI/layout/title";

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
        <html lang="en" className="h-full">
            <body className={`${interSans.variable} antialiased min-h-screen flex flex-col`}>
                <Providers>
                    <SessionProvider session={session}>
                        <AppLoader>
                            <Header />
                            <main
                                className={`flex-auto flex flex-col w-full items-center justify-start xl:max-w-5xl mx-auto`}>
                                <Title />
                                {children}
                            </main>
                            <footer
                                className={`flex justify-center items-center`}
                                style={{
                                    height: `${layoutConfig.footerHeight}`,
                                }}>
                                <p>{siteConfig.description}</p>
                            </footer>
                        </AppLoader>
                    </SessionProvider>
                </Providers>
            </body>
        </html>
    );
}

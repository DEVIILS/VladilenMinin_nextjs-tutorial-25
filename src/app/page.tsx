import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: siteConfig.name,
    description: "",
};

export default function Home() {
    return (
        <div className="flex h-screen items-center justify-center font-sans dark:bg-black">
            Main
        </div>
    );
}

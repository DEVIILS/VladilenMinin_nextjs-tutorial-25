import { Metadata } from "next";

export const metadata: Metadata = {
    title: "О нас",
    description: "",
};

export default function AboutPage() {
    return (
        <div className="flex h-screen items-center justify-center font-sans dark:bg-black">
            Page About
        </div>
    );
}

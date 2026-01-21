"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

export default function PageContent() {
    const pathname = usePathname();
    const pageContent = siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

    const getBlockContent = () => {
        return pageContent.content.map((block) => {
            return (
                <div
                    key={block.textContent}
                    className="flex text-xl mb-5 bg-[#0e0e0e] p-5 rounded-2xl">
                    {block.textContent}
                </div>
            );
        });
    };

    if (!pageContent) return <div> Ничего нет </div>;
    return (
        <>
            <h3 className="mx-4 mb-4 text-gray-400/40">{pageContent?.title}</h3>
            {getBlockContent()}
        </>
    );
}

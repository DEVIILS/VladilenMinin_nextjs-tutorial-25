"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

export default function Title() {
    const pathname = usePathname();
    const currentNavItem = siteConfig.navItems.find((item) => item.href === pathname);

    const pageTitle = currentNavItem ? currentNavItem.label : siteConfig.title.template;

    return (
        <div className="flex justify-center font-sans dark:bg-black my-6 select-none">
            <h1 className="text-3xl font-bold"> {pageTitle} </h1>
        </div>
    );
}

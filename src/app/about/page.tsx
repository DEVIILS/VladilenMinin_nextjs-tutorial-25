import PageContent from "@/components/common/page-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "О нас",
    description: "",
};

export default function AboutPage() {
    return (
        <div className="mx-10">
            <PageContent />
        </div>
    );
}

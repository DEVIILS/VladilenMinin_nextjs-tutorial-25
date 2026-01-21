import PageContent from "@/components/common/page-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ингредиенты",
    description: "",
};

export default function IngredientsPage() {
    return (
        <div className="mx-10">
            <PageContent />
        </div>
    );
}

import PageContent from "@/components/common/page-content";
import IngredientForm from "@/forms/ingredient.form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ингредиенты",
    description: "",
};

export default function IngredientsPage() {
    return (
        <div className="mx-10">
            <PageContent />
            <IngredientForm />
        </div>
    );
}

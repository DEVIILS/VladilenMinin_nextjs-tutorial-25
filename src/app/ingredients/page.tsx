import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ингредиенты",
    description: "",
};

export default function IngredientsPage() {
    return (
        <div className="flex h-screen items-center justify-center font-sans dark:bg-black">
            Page Ingredients
        </div>
    );
}

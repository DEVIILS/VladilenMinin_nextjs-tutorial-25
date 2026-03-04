export const CATEGORY_OPTIONS = [
    { value: "vegetables", label: "овощи" },
    { value: "fruits", label: "фрукты" },
    { value: "meat", label: "мясо" },
    { value: "dairy", label: "молочные" },
    { value: "spices", label: "Специи" },
    { value: "other", label: "другое" },
] as const;

export const UNIT_OPTIONS = [
    { value: "grams", label: "граммы" },
    { value: "kilograms", label: "килограммы" },
    { value: "liters", label: "литры" },
    { value: "milliliters", label: "миллилитры" },
    { value: "pieces", label: "штуки" },
] as const;

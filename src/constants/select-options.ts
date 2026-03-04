export const CATEGORY_OPTIONS = [
    { value: "VEGETABLES", label: "овощи" },
    { value: "FRUITS", label: "фрукты" },
    { value: "MEAT", label: "мясо" },
    { value: "DAIRY", label: "молочные" },
    { value: "SPICES", label: "Специи" },
    { value: "OTHER", label: "другое" },
] as const;

export const UNIT_OPTIONS = [
    { value: "GRAMS", label: "граммы" },
    { value: "KILOGRAMS", label: "килограммы" },
    { value: "LITERS", label: "литры" },
    { value: "MILLILITERS", label: "миллилитры" },
    { value: "PIECES", label: "штуки" },
] as const;

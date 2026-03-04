"use client";

import { createIngredient } from "@/actions/ingredient";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select-options";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/react";
import { Button } from "@heroui/react";
import { useState, useTransition } from "react";

interface IIngredientData {
    name: string;
    category: string;
    unit: string;
    pricePerUnit: number | null;
    description: string;
}

const initialState: IIngredientData = {
    name: "",
    category: "",
    unit: "",
    pricePerUnit: null,
    description: "",
};

export default function IngredientForm() {
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<IIngredientData>(initialState);

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        console.log("Form submitted:", formData);

        startTransition(async () => {
            const result = await createIngredient(formData);
            if (result.error) {
                setError(result.error);
                alert("ошибка создания ингредиента");
            } else {
                setError(null);
                setFormData(initialState);
                alert("успешное создания ингредиента");
            }
        });
    };

    return (
        <Form className="w-100" action={handleSubmit}>
            {error && <p className="text-red-400 mb-4">{error}</p>}
            <Input
                isRequired
                name="name"
                placeholder="Введите название ингредиента"
                type="text"
                value={formData.name}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none",
                }}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                validate={(value) => {
                    if (!value) return "название обязательно";
                    return null;
                }}
            />
            <div className="flex gap-2 w-full">
                <div className="w-1/3">
                    <Select
                        isRequired
                        name="category"
                        placeholder="Категория"
                        selectedKeys={formData.category ? [formData.category] : []}
                        classNames={{
                            trigger: "bg-default-100 w-full",
                            innerWrapper: "text-sm",
                            value: "truncate",
                            selectorIcon: "text-black",
                        }}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, category: e.target.value }))
                        }>
                        {CATEGORY_OPTIONS.map((option) => (
                            <SelectItem key={option.value} className="text-black capitalize">
                                {option.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="w-1/3">
                    <Select
                        isRequired
                        name="unit"
                        placeholder="Ед. изм."
                        selectedKeys={formData.unit ? [formData.unit] : []}
                        classNames={{
                            trigger: "bg-default-100 w-full",
                            innerWrapper: "text-sm",
                            value: "truncate",
                            selectorIcon: "text-black",
                        }}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, unit: e.target.value }))
                        }>
                        {UNIT_OPTIONS.map((option) => (
                            <SelectItem key={option.value} className="text-black capitalize">
                                {option.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="w-1/3">
                    <Input
                        isRequired
                        name="pricePerUnit"
                        placeholder="Цена"
                        type="number"
                        value={
                            formData.pricePerUnit !== null ? formData.pricePerUnit.toString() : ""
                        }
                        classNames={{
                            inputWrapper: "bg-default-100",
                            input: "text-sm focus:outline-none",
                        }}
                        onChange={(e) => {
                            const value = e.target.value ? parseFloat(e.target.value) : null;
                            setFormData((prev) => ({ ...prev, pricePerUnit: value }));
                        }}
                        endContent={
                            <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-600">
                                Р
                            </span>
                        }
                        validate={(value) => {
                            if (!value) return "Цена обязательна";
                            const num = parseFloat(value);
                            if (isNaN(num) || num < 0) return "Цена должна быть положительной";
                            return null;
                        }}
                    />
                </div>
            </div>
            <Input
                isRequired
                name="description"
                placeholder="Введите описание (необязательно)"
                type="text"
                value={formData.description}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none",
                }}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            />

            <div className="flex w-full items-center justify-end">
                <Button color="primary" type="submit" isLoading={isPending}>
                    Добавить ингредиенты
                </Button>
            </div>
        </Form>
    );
}

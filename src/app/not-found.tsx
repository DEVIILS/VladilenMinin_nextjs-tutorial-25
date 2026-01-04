"use client";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-8xl font bold text-gray-300">404</div>
            <h1 className=" text-3xl font-bold tracking-tight">Страница не найдена</h1>
            <div className="pt-6">
                <Button href="/" as={Link} color="primary" variant="shadow">
                    Вернуться на главную
                </Button>
            </div>
        </div>
    );
}

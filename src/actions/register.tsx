"use server";

import { IFromData } from "@/types/form-data";
import { prisma } from "@/utils/prisma";

export async function registerUser(formData: IFromData) {
    const { email, password, confirmPassword } = formData;

    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: password,
            },
        });

        console.log("user:", user);
        return user;
    } catch (error) {
        console.error("Registration error: ", error);
        return { error: "Registration failed" };
    }
}

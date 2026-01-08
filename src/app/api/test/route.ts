import { prisma } from "@/utils/prisma";

export async function GET() {
    try {
        await prisma.$queryRaw`SELECT 1`;
        return Response.json({ status: "Prisma Client работает!" });
    } catch (error) {
        const err = error as Error;
        return Response.json(
            {
                status: "Ошибка Prisma",
                error: err.message,
            },
            { status: 500 }
        );
    }
}

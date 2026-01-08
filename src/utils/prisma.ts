// src/utils/prisma.ts
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    (() => {
        const connectionPool = new Pool({ connectionString: process.env.DATABASE_URL });
        const adapter = new PrismaPg(connectionPool);
        return new PrismaClient({ adapter });
    })();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
    schema: "./src/lib/db/schema/*",
    out: "./drizzle",
    driver: 'turso',
    dbCredentials: {
        url: process.env.PRIVATE_DB_URL ?? '',
        authToken: process.env.PRIVATE_DB_TOKEN,
    }
} satisfies Config;
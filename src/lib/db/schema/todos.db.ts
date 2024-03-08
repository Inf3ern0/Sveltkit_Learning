import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export type Status = 'active' | 'completed' | 'deleted';

export const todos = sqliteTable('todos', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    description: text('description').notNull(),
    status: text('status').default('active').notNull().$type<Status>(),
    completedAt: integer('completed_at', { mode: 'timestamp_ms' }),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    lastUpdatedAt: integer('last_updated_at', { mode: 'timestamp_ms' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
});
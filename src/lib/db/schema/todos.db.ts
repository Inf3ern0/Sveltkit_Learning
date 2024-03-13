import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export type Status = 'active' | 'completed' | 'deleted';

export const todos = sqliteTable('todos', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    description: text('description').notNull(),
    status: text('status').default('active').notNull().$type<Status>(),
})



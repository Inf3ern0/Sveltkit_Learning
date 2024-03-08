/* 

This function will be used to delete a todo item. 
It will take in a todo ID and delete the item from the DB.

*/

import { db } from "$lib/db/client.db";
import { todos } from "$lib/db/schema/todos.db";
import { and, eq, gte } from "drizzle-orm";

export async function deleteTodo(id: number) {
    try {
        await db.delete(todos).where(eq(todos.id, id)).returning()

        return {
            resultStatus: "success",
            resultMessage: "Todo permanently deleted successfully",
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while deleting todo",
        }
    }
}

/* 

This function will be used to delete all todos with a 'deleted' status that are older than 24 hours. 
It will take in a todo ID and delete the item from the DB.

*/

export async function deleteOldTodos() {
    try {
        const IN_24_HOURS = new Date(Date.now() + 24 * 60 * 60 * 1000)

        await db.delete(todos)
            .where(
                and(
                    eq(todos.status, 'deleted'),
                    gte(todos.lastUpdatedAt, IN_24_HOURS)
                )
            ).returning()

        return {
            resultStatus: "success",
            resultMessage: "Old todos permanently deleted successfully",
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while deleting old todos",
        }
    }
}
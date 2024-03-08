/* 

This function will be used to update a todo given its ID. 
It will take in an ID, and an update (title/description) and will return the updated todo.

*/

import { db } from "$lib/db/client.db";
import { todos } from "$lib/db/schema/todos.db";
import { eq } from "drizzle-orm";

export async function updateTodo(id: number, update: { title: string, description: string }) {
    try {
        const [updatedTodo] = await db.update(todos)
            .set({
                title: update.title,
                description: update.description
            }).where(eq(todos.id, id)).returning();

        return {
            resultStatus: "success",
            resultMessage: "Todo updated successfully",
            data: updatedTodo
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while updating todo",
        }
    }
}
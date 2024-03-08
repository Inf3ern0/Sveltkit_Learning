/* 

This function will be used to remove a todo item. 
It will remove the todo and mark the todo as deleted.

*/

import { db } from "$lib/db/client.db";
import { todos } from "$lib/db/schema/todos.db";
import { eq } from "drizzle-orm";

export async function markTodoAsDeleted(id: number) {
    try {
        const [todo] = await db.update(todos)
            .set({
                status: 'deleted'
            })
            .where(eq(todos.id, id)).returning()

        return {
            resultStatus: "success",
            resultMessage: "Todo marked as deleted successfully",
            data: todo
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while marking todo for deletion",
        }
    }
}
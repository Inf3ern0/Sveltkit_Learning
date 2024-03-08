/* 

This function will be used to updated a todos status. 
It will take in a status and return the updated todo.

*/


import { db } from "$lib/db/client.db";
import { todos, type Status } from "$lib/db/schema/todos.db";
import { eq } from "drizzle-orm";


export async function setStatus(id: number, status: Status) {
    try {
        const [todo] = await db.update(todos)
            .set({
                status,
                completedAt: status === 'completed' ? new Date() : null,
                lastUpdatedAt: new Date()
            })
            .where(eq(todos.id, id)).returning()

        return {
            resultStatus: "success",
            resultMessage: "Todo status updated successfully",
            data: todo
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while updating todos status",
        }
    }
}
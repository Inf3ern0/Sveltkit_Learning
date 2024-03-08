/* 

This function will be used to list all todos. 
It can take in an optional status to filter what todos get returned.

*/

import { db } from "$lib/db/client.db";
import { todos, type Status } from "$lib/db/schema/todos.db";
import { eq } from "drizzle-orm";

export async function listTodos(status: Status = 'active') {
    try {
        const todoList = await db.select().from(todos).where(eq(todos.status, status))

        return {
            resultStatus: "success",
            resultMessage: "Fetched todos successfully",
            data: todoList
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while fetching todos",
        }
    }
}
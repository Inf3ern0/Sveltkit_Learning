/* 

This function will be used to create a new todo item. 
It will take in a title and description and return the newly created todo item.

*/

import { db } from "$lib/db/client.db";
import { todos } from "$lib/db/schema/todos.db";

export async function createTodo(title: string, description: string) {
    try {
        const [todo] = await db.insert(todos).values({
            title,
            description
        }).returning()

        return {
            resultStatus: "success",
            resultMessage: "Todo created successfully",
            data: todo
        }

    } catch (error) {
        console.error(error)

        return {
            resultStatus: "error",
            resultMessage: "An error occurred while creating todo",
        }
    }
}
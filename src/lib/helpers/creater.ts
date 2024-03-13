import { db } from "$lib/db/client.db";
import { todos } from "$lib/db/schema/todos.db";

export async function creator(description:string){
try {
   const insertedTodo = await db.insert(todos).values({description}).returning()
   return insertedTodo
} catch (error) {
    console.error(error)
    return new Error("Failed to create To Do")
}
}
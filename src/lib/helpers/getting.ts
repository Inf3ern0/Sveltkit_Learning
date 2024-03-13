import { db } from "$lib/db/client.db";
import { todos, type Status } from "$lib/db/schema/todos.db";
import { eq } from "drizzle-orm";

export async function getting(status:Status = "active"){
try {
   const fetchedTodos = await db.select().from(todos).where(eq(todos.status,status))
   return fetchedTodos
} catch (error) {
    console.error(error)
    return new Error("Failed to get To Do list")
}
}
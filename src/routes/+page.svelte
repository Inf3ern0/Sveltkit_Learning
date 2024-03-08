<script lang="ts">
    interface Todo {
      id: number;
      text: string;
      done: boolean;
    }
  
    let todos: Todo[] = [];
    let newTodo: string = '';
  
    //Adding a task on my todo list
    function addTodo() {
    if (newTodo.trim() !== '') {
      todos = [...todos, { id: Date.now(), text: newTodo, done: false }];
      newTodo = '';
    }
  }
// Marking task as done
  function toggleDone(todo: Todo) {
    todo.done = !todo.done;
    todos = todos.map(t => t.id === todo.id ? todo : t);
  }
//Remove task from list
  function removeTodo(todoId: number) {
    todos = todos.filter(t => t.id !== todoId);
  }
</script>

<style>
    
    .done {
      text-decoration: line-through;
    }
    
  </style>
  
  <h1>TO DO List</h1>
  <input bind:value={newTodo} on:keyup={event => event.key === 'Enter' && addTodo()} placeholder="Add new todo">
  <button on:click={addTodo}>Add</button>
  
  <ul>
    {#each todos as todo}
      <li class:done={todo.done}>
        <input type="checkbox" bind:checked={todo.done} on:click={() => toggleDone(todo)}>
        {todo.text}
        <button on:click={() => removeTodo(todo.id)}>Remove</button>
      </li>
    {/each}
  </ul>
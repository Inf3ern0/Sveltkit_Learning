<script>
    let todos = [];
    let newTodo = '';
  
    function addTodo() {
      if (newTodo.trim() !== '') {
        todos = [...todos, { id: Date.now(), text: newTodo, done: false }];
        newTodo = '';
      }
    }
  
    function toggleDone(todo) {
      todo.done = !todo.done;
      todos = todos.map(t => t.id === todo.id ? todo : t);
    }
  
    function removeTodo(todoId) {
      todos = todos.filter(t => t.id !== todoId);
    }
  </script>
  
  <style>
    .done {
      text-decoration: line-through;
    }
  </style>
  
  <h1>Todo List</h1>
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
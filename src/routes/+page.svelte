<script lang="ts">
	import { enhance } from "$app/forms";

</script>
<form method="POST" action="/" use:enhance>
    <label for="description">
        Description
    </label>
    <input type="text" id="description" name="description">
    <button>Submit</button>
</form>
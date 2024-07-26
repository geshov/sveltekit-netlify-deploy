<script>
  import { enhance } from "$app/forms";
  let { data } = $props();
</script>

<h1 class="text-lg font-semibold">Countries</h1>

<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>

<form method="post" use:enhance>
  <input type="text" name="country" class="input input-primary" required />
  <button type="submit" class="btn btn-primary">Добавить</button>
</form>

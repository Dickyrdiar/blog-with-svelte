<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  // @ts-nocheck

  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import "./styles.css";
  import { FetchData } from "../shared/Api";

  let data;

  onMount(async () => {
    try {
      const datafetch = await FetchData("/articles");
      data = datafetch?.data;
    } catch (err) {
      console.log(err);
    }

    console.log("data", data);
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>

    <div
      class="container mx-auto border border-indigo-50 px-4 flex justify-center"
    >
      this is tailwind with svelte
    </div>
    <div class="flex justify-center">
      {#each data as val}
        {val?.title}
      {/each}
    </div>

    <!-- <MyApiFetch /> -->
  </h1>
</section>

<!-- <style>
  @import 'flowbite/css/flowbite.min.css';
</style> -->

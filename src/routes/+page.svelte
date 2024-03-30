<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import "./styles.css";
  import { FetchData } from "../shared/Api";
  import Card from "../components/Card/Card.svelte";
  // import { Spineer } from "flowbite-svelte";

  let data = [];
  let obsever;
  let page = 1;
  let loading = false;

  onMount(async () => {
    loading = true;
    try {
      const datafetch = await FetchData(`/articles`);
      data = datafetch?.data;
      console.log("data", datafetch);
    } catch (err) {
      console.log(err);
    } finally {
      loading = false;
    }
  });

  function handleClickDetail(event) {
    event.preventDefault();
    console.log("id", event);
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full">
  {#if loading}
    <div class="flex jus items-center h-screen">loading....</div>
  {:else}
    <div class="p-4 h-screen bg-red-3 grid grid-cols-3">
      {#each data as val}
        <div>
          <Card
            idArticles={() => handleClickDetail()}
            title={val.title}
            desc={val.description}
            img={val.cover_image}
          />
        </div>
      {/each}
    </div>
  {/if}
</section>

<!-- <style>
  @import 'flowbite/css/flowbite.min.css';
</style> -->

<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import "./styles.css";
  import { FetchData } from "../shared/Api";
  import Card from "../components/Card/Card.svelte";
  import { Spinner } from "flowbite-svelte";
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
      // console.log("data", datafetch);
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

<section
  class="max-w-[80%] flex justify-center items-center p-4 ml-[10%] container"
>
  {#if loading}
    <div class="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  {:else}
    <div class="flex justify-center items-center">
      <div class="p-4 grid grid-cols-3 gap-4">
        {#each data as val}
          <div class="mt-[20px]">
            <Card
              idArticles={() => handleClickDetail()}
              title={val.title}
              desc={val.description}
              img={val.cover_image}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<!-- <style>
  @import 'flowbite/css/flowbite.min.css';
</style> -->

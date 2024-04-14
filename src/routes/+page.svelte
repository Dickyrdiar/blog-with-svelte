<script>
  // @ts-nocheck

  import { FetchData } from "../shared/Api";
  import { onMount } from "svelte";
  import "./styles.css";
  import Card from "../components/Card/Card.svelte";
  import { Spinner } from "flowbite-svelte";

  let data = [];
  let page = 1;
  let loading = false;
  let hasMore = true;
  let observerRef = null;

  async function fetchMoreData() {
    loading = true;

    try {
      const response = await FetchData(`/articles?page=${page}`);
      data = data.concat(response?.data);
      hasMore = response?.data?.next || response?.data?.hasnNextPage;
    } catch (err) {
      console.log("error", err);
    } finally {
      loading = false;
    }
  }

  const handleInterSection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasMore) {
      page++;
      fetchMoreData;
    }
  };

  $: {
    fetchMoreData();
  }

  onMount(() => {
    const options = { threshold: 0.5 };
    observerRef = new IntersectionObserver(handleInterSection, options);
    observerRef.observe(observerRef);
  });

  onDestroy(() => {
    if (observerRef) {
      observerRef.disconnect();
    }
  });
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
    <div
      class="flex justify-center items-center infinite-scroll"
      bind:this={observerRef}
    >
      <div class="p-4 grid grid-cols-3 gap-4">
        {#each data as val}
          <div class="mt-[20px]">
            <Card
              link={`/article/${val.id}`}
              title={val.title}
              desc={val.description}
              img={val.cover_image}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- <Button on:click={() => handleclickMorePage()}>load more</Button> -->
</section>

<!-- <style>
  @import 'flowbite/css/flowbite.min.css';
</style> -->

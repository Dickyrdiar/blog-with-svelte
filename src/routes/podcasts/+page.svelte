<script>
	import { onMount } from 'svelte';
  import "../styles.css";
  import { fetchDataPodcast } from '../../shared/Api.js'
  import { Spinner } from "flowbite-svelte";
  import Card from '../../components/Card/Card.svelte'

  let data = []
  let page = 1
  let loading = false

  onMount(async () => {
    loading = true 

    try {
      const datafetch = await fetchDataPodcast(`podcast_episodes`)
      data = datafetch?.data
      console.log("data fetch", data)
    } catch (err) {
      console.log(err)
    } finally {
      loading = false
    }
  })
</script>

<svelte:head>
  <title>Podcast</title>
</svelte:head>

<section class="max-w-[80%] flex justify-center items-center p-4 ml-[10%]">
  {#if loading}
    <div class="flex justify-center items-center h-screen">
      <Spinner/>
    </div>
  {:else}
    <div class="flex justify-center items-center">
      <div class="p-4 grid grid-cols-3 gap-4">
        {#each data as value}
          <div class="mt-[20px]">
            <Card
              title={value?.podcast?.title}
              img={value?.podcast?.image_url}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

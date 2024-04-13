<script>
  import { onMount } from "svelte";
  import "../styles.css";
  import { fetchVideos } from "../../shared/Api";

  let loading = false;

  onMount(async () => {
    loading = true;

    try {
      const responseVideo = await fetchVideos(`videos`);
      console.log("videos", responseVideo?.data);
    } catch (err) {
      console.log("error", err);
    } finally {
      loading = false;
    }
  });
</script>

<div class="flex justify-center items-center h-screen">this is videos</div>

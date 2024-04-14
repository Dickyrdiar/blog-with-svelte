<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { fetchDataDetail } from "../../shared/Api";

  console.log("params", $page?.params);

  const FetchDetail = async () => {
    try {
      const response = await fetchDataDetail(`/${$page.params.id}`);
      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  onMount(async () => {
    FetchDetail();
  });
</script>

<div>this is detail</div>

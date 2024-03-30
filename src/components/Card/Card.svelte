<script>
  // @ts-nocheck

  import { A, Card } from "flowbite-svelte";

  export let title;
  export let desc;
  export let img;
  export let idArticles;
</script>

<div class="h-screen w-full">
  <div class="space-y-4 h-[300px]">
    <Card {img}>
      <A
        href={idArticles}
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </A>

      <p
        class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
      >
        {desc}
      </p>
    </Card>
  </div>
</div>

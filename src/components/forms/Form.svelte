<script>
  // @ts-nocheck

  import { Label, Input } from "flowbite-svelte";

  // parsing props
  export let value;
  export let label;
</script>

<div class="mb-6">
  <Label for="default-input" class="block mb-2">{label}</Label>

  <div class="mt-4">
    <Input {value} />
  </div>
</div>

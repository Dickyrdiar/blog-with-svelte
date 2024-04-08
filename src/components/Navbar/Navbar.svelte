<script>
  // @ts-nocheck

  import {
    Button,
    Input,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
  } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  import { goto } from "$app/navigation";

  const menuItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Podcast", href: "/podcast" },
    { id: 3, label: "Videos", href: "/videos" },
  ];
</script>

<Navbar class="sticky">
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Flowbite blog's</span
    >
  </NavBrand>

  <!-- search -->
  <div class="flex md:order-2">
    <Button
      color="none"
      data-collapse-toggle="mobile-menu-3"
      aria-controls="mobile-menu-3"
      aria-expanded="false"
      class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
    >
      <SearchOutline class="w-5 h-5" />
    </Button>

    <div class="hiden relative md:block">
      <div
        class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none"
      >
        <SearchOutline class="w-4 h-4" />
      </div>

      <Input id="search-navbar" class="ps-10" placeholder="search..." />
    </div>
  </div>

  <NavHamburger />

  <NavUl>
    {#each menuItems as Value}
      <NavLi key={Value.id} href={Value.href}>{Value.label}</NavLi>
    {/each}
  </NavUl>
</Navbar>

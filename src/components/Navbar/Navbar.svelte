<script>
  import {
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
  } from "flowbite-svelte";

  const menuItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Pricing", href: "/pricing" },
  ];
</script>

<Navbar>
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Flowbite</span
    >
  </NavBrand>
  <NavHamburger />

  <!-- <NavUl>
    {#each menuItems as Value}
      <NavLi key={Value.id} href={Value.href}>{Value.label}</NavLi>
    {/each}
  </NavUl> -->
</Navbar>

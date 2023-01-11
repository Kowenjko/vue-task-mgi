<template>
  <header class="fixed w-full z-10 bg-[#17172Ee6]">
    <nav
      class="px-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex items-center gap-7 h-16 text-white"
    >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/leaflet">Leaflet</RouterLink>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
a {
  transition: all 0.2s ease;
  @apply font-medium text-xl text-[#237BFF] block py-2 hover:text-white;
  &.router-link-exact-active,
  &.router-link-active {
    @apply text-white;
  }
}
</style>

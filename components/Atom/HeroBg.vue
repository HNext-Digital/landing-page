<template>
  <div class="absolute -z-10 left-0 right-0 top-0 bottom-0 bg-class opacity-20 dark:opacity-10" />
</template>

<style scoped>
.bg-class {
  @apply bg-[url(/images/hero-bg.svg)];
  transform: scale(1.01);
  image-rendering: crisp-edges;
}
</style>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  level: number
}>(), {
  level: 1,
})

const styleByLevel = computed(() => {
  switch (props.level) {
    case 1:
      return 'text-4xl font-black'
    case 2:
      return 'text-3xl font-bold'
    case 3:
      return 'text-2xl font-bold'
    case 4:
      return 'text-xl font-bold'
    case 5:
      return 'text-lg font-bold'
    case 6:
      return 'text-base font-bold'
    default:
      return 'text-base font-bold'
  }
})
</script>

<template>
  <component
    :is="'h' + level"
    :class="styleByLevel"
  >
    <slot />
  </component>
</template>

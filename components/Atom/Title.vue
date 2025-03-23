<script setup lang="ts">
const props = withDefaults(defineProps<{
  level?: number
  displayLevel?: number
  is?: string
}>(), {
  is: 'h',
})

const titleTag = computed(() => {
  return props.level ? (props.is === 'h' ? 'h' + props.level : props.is) : 'p'
})

const titleClasses = computed(() => {
  switch (props.displayLevel ?? props.level) {
    case 1:
      return 'text-6xl font-black'
    case 2:
      return 'text-5xl font-bold'
    case 3:
      return 'text-4xl font-bold'
    case 4:
      return 'text-3xl font-bold'
    case 5:
      return 'text-2xl font-bold'
    case 6:
      return 'text-lg font-bold'
    default:
      return 'text-lg font-bold'
  }
})
</script>

<template>
  <component
    :is="titleTag"
    :class="titleClasses"
  >
    <slot />
  </component>
</template>

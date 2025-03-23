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
      return 'text-6xl leading-[1.2] font-black'
    case 2:
      return 'text-5xl leading-[1.2] font-bold'
    case 3:
      return 'text-4xl leading-[1.2] font-bold'
    case 4:
      return 'text-3xl leading-[1.2]  font-bold'
    case 5:
      return 'text-2xl leading-[1.2] font-bold'
    case 6:
      return 'text-lg leading-[1.2] font-bold'
    default:
      return 'text-lg leading-[1.2] font-bold'
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

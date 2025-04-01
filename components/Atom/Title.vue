<script setup lang="ts">
const props = withDefaults(defineProps<{
  level?: number
  displayLevel?: number
  is?: string
  gradient?: boolean
}>(), {
  is: 'h',
})

const titleTag = computed(() => {
  return props.level && props.level < 7 ? (props.is === 'h' ? 'h' + props.level : props.is) : 'p'
})

const titleClasses = computed(() => {
  switch (props.displayLevel ?? props.level) {
    case 1:
      return 'text-5xl font-serif md:text-6xl leading-[1.2] font-black'
    case 2:
      return 'text-4xl font-serif md:text-5xl leading-[1.2] font-black'
    case 3:
      return 'text-3xl font-serif md:text-4xl leading-[1.2] font-black'
    case 4:
      return 'text-2xl font-serif md:text-3xl leading-[1.2] font-black'
    case 5:
      return 'text-lg font-serif md:text-2xl leading-[1.2] font-black'
    case 6:
      return 'text-lg font-serif md:text-lg leading-[1.2]'
    case 7:
      return 'text-md font-serif md:text-md leading-[1.2]'
    default:
      return 'text-sm font-serif md:text-sm leading-[1.3]'
  }
})

const styles = computed(() => {
  if (!props.gradient) {
    return ''
  }

  return 'text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-slate-800 to-blue-600 dark:from-neutral-400 dark:via-slate-100 dark:to-blue-600 animate-gradient'
})
</script>

<template>
  <component
    :is="titleTag"
    :class="[titleClasses, styles]"
  >
    <slot />
  </component>
</template>

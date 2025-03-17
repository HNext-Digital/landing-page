<script setup lang="ts">
import { inView, animate } from 'motion'

const props = withDefaults(defineProps<{
  delay?: number
  tag?: string
}>(), {
  delay: 0,
  tag: 'div',
})

let stopViewTracking: VoidFunction = () => {}

const container = ref<HTMLElement>()

onMounted(() => {
  if (!container.value) return

  stopViewTracking = inView(container.value, () => {
    if (!container.value) return

    animate(container.value, { scale: 1, opacity: 1, y: [20, 0] }, { delay: props.delay })

    return () => {
      if (!container.value) return

      animate(container.value, { scale: 0.2, opacity: 0, y: [0, 0] })
    }
  })
})

onUnmounted(() => stopViewTracking())
</script>

<template>
  <component
    :is="tag"
    ref="container"
    class="transform-[scale(0.2)] transform-[translate(0 0)] opacity-0"
  >
    <slot />
  </component>
</template>

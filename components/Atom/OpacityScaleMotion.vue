<script setup lang="ts">
import { inView, animate } from 'motion'

let stopViewTracking: VoidFunction = () => {}

const container = ref<HTMLElement>()

onMounted(() => {
  if (!container.value) return

  stopViewTracking = inView(container.value, () => {
    if (!container.value) return

    animate(container.value, { scale: 1, opacity: 1 })

    return () => {
      if (!container.value) return

      animate(container.value, { scale: 0.2, opacity: 0 })
    }
  })
})

onUnmounted(() => stopViewTracking())
</script>

<template>
  <div
    ref="container"
    class="transform-[scale(0.2)] opacity-0"
  >
    <slot />
  </div>
</template>

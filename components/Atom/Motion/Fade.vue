<script setup lang="ts">
import { inView, animate } from 'motion'

const props = withDefaults(defineProps<{
  delay?: number
  is?: string
}>(), {
  delay: 0,
  is: 'div',
})

let stopViewTracking: VoidFunction = () => {}

const container = ref<HTMLElement>()

onMounted(() => {
  if (!container.value) return

  stopViewTracking = inView(container.value, () => {
    if (!container.value) return

    animate(container.value, { opacity: 1 }, { delay: props.delay })

    return () => {
      if (!container.value) return

      animate(container.value, { opacity: 0 })
    }
  })
})

onUnmounted(() => stopViewTracking())
</script>

<template>
  <component
    :is="is"
    ref="container"
    class="opacity-0"
  >
    <slot />
  </component>
</template>

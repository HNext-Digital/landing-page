<script setup lang="ts">
import { AtomMotionFade, AtomMotionOpacityScale } from '#components'

const props = withDefaults(defineProps<{
  is: string
  text: string
  stepDelay?: number
  disableTransform?: boolean
}>(), {
  stepDelay: 0.15,
  disableTransform: false,
})

const words = computed(() => props.text.split(' '))

const MotionComponent = computed(() => props.disableTransform ? AtomMotionFade : AtomMotionOpacityScale)
</script>

<template>
  <component :is="is">
    <MotionComponent
      v-for="(word, index) in words"
      :key="index"
      tag="span"
      :delay="index * stepDelay + 0.1"
      class="inline-block mr-1"
    >
      {{ word }}
    </MotionComponent>
  </component>
</template>

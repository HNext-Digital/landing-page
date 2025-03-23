<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import DigitalIllustration from './DigitalIllustration.json'
</script>

<template>
  <ClientOnly
    fallback-tag="div"
  >
    <Vue3Lottie
      :animation-data="DigitalIllustration"
      :height="300"
      :width="400"
    />
    <template #fallback>
      <div
        style="height: 300px; width: 400px;"
        class="max-w-full"
      />
    </template>
  </ClientOnly>
</template>

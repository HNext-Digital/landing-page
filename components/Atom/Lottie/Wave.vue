<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import wave from './wave.json'
</script>

<template>
  <div>
    <ClientOnly>
      <Vue3Lottie
        :animation-data="wave"
        :height="1920"
        :width="3840"
      />
    </ClientOnly>
  </div>
</template>

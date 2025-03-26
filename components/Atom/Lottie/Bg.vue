<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import bg from './bg.json'
</script>

<template>
  <div>
    <ClientOnly>
      <Vue3Lottie
        :animation-data="bg"
        :height="764"
        :width="1997"
      />
    </ClientOnly>
  </div>
</template>

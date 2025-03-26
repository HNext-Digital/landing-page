<script setup>
import { ref, onMounted } from 'vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 2000) // Splash screen disappears after 2 seconds
})
</script>

<template>
  <div
    v-if="showSplash"
    class="fixed h-screen w-screen bg-slate-300 dark:bg-gray-900 z-50 animate-fade-scale"
  >
    <!-- Splash Screen -->
    <div class="flex items-center justify-center h-screen w-screen">
      <IconLogo
        class="w-40 block fill-current"
        alt="HNext Digital"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeScale {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.animate-fade-scale {
  animation: fadeScale 2s ease forwards;
}
</style>

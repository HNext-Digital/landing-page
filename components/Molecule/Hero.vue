<template>
  <div class="hero relative px-4 overflow-hidden">
    <AtomLottieWave class="absolute left-[50%] translate-x-[-50%] -top-[800px] -z-10 opacity-70 dark:opacity-50 dark:invert" />
    <AtomLottieBg class="absolute left-[50%] translate-x-[-50%] top-0 -z-10 opacity-30" />
    <div class="max-w-[22rem] md:max-w-[28rem] mx-auto py-8">
      <div class="flex flex-col gap-10 justify-center items-center md:flex-row text-center  min-h-[764px]">
        <div class="flex flex-col gap-4">
          <div>
            <AtomTitle
              :level="1"
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient"
            >
              <span>{{ $t('hero.slogan') }}</span>
            </AtomTitle>
            <p class="font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-purple-900 to-blue-400 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
              <span>{{ $t('hero.description') }}</span>
            </p>
          </div>
          <AtomFakeInputCta />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradientRotate {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientRotate 4s linear infinite;
}
</style>

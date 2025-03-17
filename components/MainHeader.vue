<template>
  <div class="container mx-auto py-2 px-4">
    <div class="flex justify-between items-center">
      <AtomOpacityScaleMotion>
        <NuxtLinkLocale
          to="/"
          :title="$t('home.goTo')"
          class="py-2 px-2 block hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
        >
          <h1 class="text-2xl font-bold">
            <img
              src="/images/logo.svg"
              class="w-30 block dark:invert"
              alt="HNext Digital"
            >
          </h1>
        </NuxtLinkLocale>
      </AtomOpacityScaleMotion>
      <div class="flex gap-2">
        <AtomColorModeButton />
        <AtomHeaderPanel />
      </div>
    </div>
  </div>
</template>

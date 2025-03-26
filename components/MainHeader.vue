<template>
  <div class="bg-neutral-100/90 dark:bg-slate-900/90 fixed top-0 left-0 right-0 z-10">
    <div class="container mx-auto py-2 px-4">
      <div class="flex justify-between items-center">
        <NuxtLinkLocale
          to="/"
          :title="$t('home.goTo')"
          class="py-2 px-2 block hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
        >
          <h1 class="text-2xl font-bold">
            <IconLogo
              class="w-20 block fill-current"
              alt="HNext Digital"
            />
          </h1>
        </NuxtLinkLocale>
        <div class="flex gap-2">
          <AtomColorModeButton />
          <AtomHeaderPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()

const nextLocale = computed(() => {
  const currentIndex = locales.value.findIndex(l => l.code === locale.value)
  const nextIndex = (currentIndex + 1) > locales.value.length - 1 ? 0 : currentIndex + 1
  return locales.value[nextIndex].code
})
</script>

<template>
  <UButton
    :icon="`circle-flags:${nextLocale}`"
    color="neutral"
    variant="ghost"
    class="cursor-pointer"
    :to="switchLocalePath(nextLocale)"
  />
</template>

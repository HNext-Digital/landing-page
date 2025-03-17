<template>
  <USlideover :title="$t('contact.cta')">
    <AtomMotionOpacityScale>
      <UButton
        :label="$t('contact.cta')"
        :icon="'i-lucide-mail-plus'"
        color="primary"
        variant="solid"
        class="cursor-pointer hidden md:flex"
      />
      <UButton
        :icon="'i-lucide-mail-plus'"
        color="primary"
        variant="solid"
        class="cursor-pointer md:hidden"
      />
    </AtomMotionOpacityScale>

    <template #body>
      <p>Test</p>
    </template>
  </USlideover>
</template>

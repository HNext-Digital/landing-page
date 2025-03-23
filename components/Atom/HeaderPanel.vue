<template>
  <USlideover :title="$t('contact.cta')">
    <UButton
      :icon="'i-lucide-mail-plus'"
      color="primary"
      variant="solid"
      class="cursor-pointer"
    >
      <span class="hidden md:flex">{{ $t('contact.cta') }}</span>
    </UButton>

    <template #body>
      <p>Test</p>
    </template>
  </USlideover>
</template>

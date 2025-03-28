<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('pages.index.title'),
  description: () => t('pages.index.about'),
  ogTitle: () => t('pages.index.title'),
  ogDescription: () => t('pages.index.about'),
  ogImage: '/images/ogImage.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('pages.index.title'),
  twitterDescription: () => t('pages.index.about'),
  twitterImage: '/images/ogImage.png',
})

useHead({
  meta: [{
    name: 'icon',
    content: '/favicon.svg',
  }],
})

const title = ref('Welcome to My Amazing Site')
</script>

<template>
  <div>
    <MoleculeHero />
    <div class="container mx-auto py-4 px-4">
      <AtomTitle :level="2">
        {{ title }}
      </AtomTitle>
    </div>
  </div>
</template>

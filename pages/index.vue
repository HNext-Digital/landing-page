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

const title = ref('Nos Services')
</script>

<template>
  <div>
    <MoleculeHero />
    <div class="py-8">
      <div class="container mx-auto px-4">
        <AtomTitle
          :level="2"
          :display-level="3"
          :gradient="true"
        >
          {{ title }}
        </AtomTitle>
      </div>
    </div>
    <div class="py-8">
      <div class="container mx-auto px-4">
        <AtomTitle
          :level="2"
          :display-level="3"
          :gradient="true"
        >
          Nos Réalisations
        </AtomTitle>
      </div>
    </div>
    <div class="py-8">
      <div class="container mx-auto px-4">
        <AtomTitle
          :level="2"
          :display-level="3"
          :gradient="true"
        >
          Qui sommes-nous ?
        </AtomTitle>
      </div>
    </div>
    <div class="py-8">
      <div class="container mx-auto px-4">
        <AtomTitle
          :level="2"
          :display-level="3"
          :gradient="true"
        >
          Ils nous font confiance
        </AtomTitle>
      </div>
    </div>
    <div class="py-8">
      <div class="container mx-auto px-4">
        <AtomTitle
          :level="2"
          :display-level="3"
          :gradient="true"
        >
          Prêt à démarrer votre projet ?
        </AtomTitle>
      </div>
    </div>
  </div>
</template>

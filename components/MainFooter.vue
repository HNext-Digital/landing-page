<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const info = ref({
  companyName: 'HNext Digital',
  mail: 'contact@hnext.fr',
  siren: '879 252 096',
  capital: '1 000€',
})

const socials = ref<{
  icon: string
  title: string
  link: string
  color: ButtonProps['color']
}[]>([
  {
    icon: 'cib:github',
    title: 'GitHub - HNext Digital',
    link: 'https://github.com/hNext-Digital',
    color: 'neutral',
  },
  {
    icon: 'cib:linkedin',
    title: 'LinkedIn - HNext Digital',
    link: 'https://www.linkedin.com/company/hnext-digital/',
    color: 'info',
  },
])
</script>

<template>
  <div>
    <div class="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white py-8">
      <div class="container mx-auto px-4 flex flex-col gap-5">
        <div class="flex justify-between items-center flex-col md:flex-row-reverse gap-5">
          <div class="flex flex-col gap-2">
            <AtomTitle
              :level="3"
              :display-level="7"
            >
              {{ $t('footer.social') }}
            </AtomTitle>
            <div class="flex gap-2 justify-center items-center">
              <UButton
                v-for="(item) in socials"
                :key="item.icon"
                :icon="item.icon"
                variant="ghost"
                :color="item.color"
                size="xl"
                :to="item.link"
                target="_blank"
                :title="item.title"
                rel="noopener noreferrer"
              />
            </div>
          </div>
          <IconLogo class="w-40 fill-current transition-all hover:text-neutral-900 dark:hover:text-neutral-200" />
        </div>
        <div class="flex justify-center md:justify-between items-center">
          <ul class="text-[0.7rem] flex flex-col gap-1">
            <li
              v-for="(item, index) in info"
              :key="index"
            >
              <p class="flex justify-between items-center gap-2">
                <span class="opacity-50">⁊ {{ $t(index) }} ⌁</span>
                <template v-if="index !== 'mail'">
                  <span class="font-mono">{{ item }}</span>
                </template>
                <template v-else>
                  <UButton
                    class="font-mono p-0 text-[1em]"
                    variant="link"
                    color="info"
                    :title="$t('contact.cta')"
                    :to="`mailto:${item}`"
                  >
                    {{ item }}
                  </UButton>
                </template>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-neutral-900 dark:bg-neutral-200 text-white dark:text-black py-3 text-xs">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div>
            <p>{{ $t('footer.intro') }} &copy; {{ (new Date()).getFullYear() }} HNext Digital. {{ $t('footer.rights') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

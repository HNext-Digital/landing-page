<script setup lang="ts">
const contactStore = useContactStore()

const loader = ref<boolean>(false)
const showThankYou = ref<boolean>(false)

const form = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  loader.value = true
  $fetch('/api/contact', {
    method: 'POST',
    body: form.value,
  })
    .finally(() => {
      setTimeout(() => {
        loader.value = false
        showThankYou.value = true
      }, 800)
    })
}

const reset = () => {
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
  showThankYou.value = false
}
</script>

<template>
  <USlideover
    :open="contactStore.panelOpen"
    :title="$t('contact.cta')"
    :description="$t('contact.description')"
    @update:open="contactStore.setPanelOpen($event)"
    @close="contactStore.setPanelOpen(false)"
  >
    <UButton
      :icon="'i-lucide-mail-plus'"
      color="primary"
      variant="solid"
      class="cursor-pointer"
    >
      <span class="hidden md:flex">{{ $t('contact.cta') }}</span>
    </UButton>

    <template #body>
      <div class="relative">
        <UForm
          v-if="!showThankYou"
          :state="form"
          class="flex flex-col space-y-4"
          @submit.prevent="handleSubmit()"
        >
          <UFormField
            :label="$t('contact.name')"
            for="name"
            class="flex flex-col"
          >
            <UInput
              id="name"
              v-model="form.name"
              autocomplete="name"
              :placeholder="$t('contact.placeholder.name')"
              class="w-full"
              required
            />
          </UFormField>
          <UFormField
            :label="$t('contact.email')"
            for="email"
            class="flex flex-col w-full"
          >
            <UInput
              id="email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              :placeholder="$t('contact.placeholder.email')"
              class="w-full"
              required
            />
          </UFormField>
          <UFormField
            :label="$t('contact.message')"
            for="message"
            class="flex flex-col"
          >
            <UTextarea
              id="message"
              v-model="form.message"
              autocomplete="none"
              :placeholder="$t('contact.placeholder.message')"
              :rows="8"
              class="w-full"
              required
            />
          </UFormField>
          <UButton
            type="submit"
            color="primary"
            variant="solid"
            size="xl"
            class="mt-4 self-start"
          >
            {{ $t('contact.submit') }}
          </UButton>
        </UForm>
        <div
          v-if="showThankYou"
          class="flex flex-col items-center justify-center h-full gap-4 max-w-[20rem] mx-auto"
        >
          <AtomTitle
            :level="2"
            :display-level="6"
            class="text-center"
          >
            {{ $t('contact.thanks') }}
          </AtomTitle>
          <UButton
            color="primary"
            variant="solid"
            size="md"
            @click="reset"
          >
            {{ $t('contact.redo') }} <Icon name="i-lucide-rotate-ccw" />
          </UButton>
        </div>
        <div
          v-if="loader"
          class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 150"
          ><path
            fill="none"
            stroke="#01bc4f"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="300 385"
            stroke-dashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          ><animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="2"
            values="685;-685"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          /></path></svg>
        </div>
      </div>
    </template>
  </USlideover>
</template>

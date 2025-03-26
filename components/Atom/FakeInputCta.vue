<template>
  <div class="flex flex-col gap-2">
    <AtomTitle
      :level="2"
      :display-level="6"
    >
      Contactez-nous dès aujourd'hui
    </AtomTitle>
    <div class="flex align-middle justify-center">
      <input
        type="text"
        readonly
        disabled
        value="contact@hnext.fr"
        class="px-4 pb-0.5 border border-brand w-[10rem] min-w-none"
      >
      <UButton
        class="px-3 py-3 border border-brand bg-brand font-bold text-lg rounded-none"
        href="mailto:contact@hnext.fr"
        icon="i-lucide-send"
      />
    </div>
  </div>
</template>

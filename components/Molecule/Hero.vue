<template>
  <div class="hero relative px-4 border-t-1 border-b-1 border-slate-300">
    <AtomHeroBg class="-z-10" />
    <div class="container mx-auto py-8">
      <div class="flex flex-col gap-10 justify-center items-center md:flex-row">
        <div class="md:py-10">
          <img
            src="/images/illustration.svg"
            alt=""
            class="w-6xl max-w-full"
          >
        </div>
        <div>
          <AtomTitle :level="1">
            <span>{{ $t('hero.slogan') }}</span>
          </AtomTitle>
          <AtomTitle
            is="p"
            :level="4"
            class="mt-4"
          >
            <span>{{ $t('hero.description') }}</span>
          </AtomTitle>
        </div>
      </div>
    </div>
  </div>
</template>

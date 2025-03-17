<template>
  <AtomMotionOpacityScale class="hero relative px-4 border-t-1 border-b-1 border-slate-300">
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
          <AtomMotionOpacityScale :delay=".1">
            <AtomTitle :level="1">
              <ClientOnly
                fallback-tag="span"
                :fallback="$t('hero.slogan')"
              >
                <AtomMotionSplitText
                  is="span"
                  :text="$t('hero.slogan')"
                />
              </ClientOnly>
            </AtomTitle>
          </AtomMotionOpacityScale>
          <AtomTitle
            is="p"
            :level="4"
            class="mt-4"
          >
            <ClientOnly
              fallback-tag="span"
              :fallback="$t('hero.description')"
            >
              <AtomMotionSplitText
                is="span"
                :text="$t('hero.description')"
                :step-delay="0.02"
                :disable-transform="true"
              />
            </ClientOnly>
          </AtomTitle>
        </div>
      </div>
    </div>
  </AtomMotionOpacityScale>
</template>

<template>
  <div class="container mx-auto py-4">
    <div class="flex justify-between items-center">
      <NuxtLinkLocale
        to="/"
        :title="$t('home.goTo')"
      >
        <h1 class="text-2xl font-bold ml-2">
          <img
            src="/images/logo.svg"
            class="w-16"
            alt="HNext"
          >
        </h1>
      </NuxtLinkLocale>
      <nav class="ml-10">
        <ul class="flex space-x-4">
          <li>
            <a
              href="#"
              class="text-white hover:text-gray-300"
            >Home</a>
          </li>
          <li>
            <a
              href="#"
              class="text-white hover:text-gray-300"
            >About</a>
          </li>
          <li>
            <a
              href="#"
              class="text-white hover:text-gray-300"
            >Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

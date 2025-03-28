<script setup lang="ts">
</script>

<template>
  <div>
    <div class="bg-neutral-900 text-white py-3 text-xs">
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

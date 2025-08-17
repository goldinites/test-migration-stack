<template>
  <div class="mb-4 text-2xl font-semibold">{{ counterStore.count }}</div>
  <div class="mb-6 flex gap-x-4">
    <button
      class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      @click="counterStore.decrement"
    >
      {{ $t('decrement') }}
    </button>
    <button
      class="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      @click="counterStore.increment"
    >
      {{ $t('increment') }}
    </button>
    <span />
  </div>
</template>

<script setup lang="ts">
  const counterStore = useCounterStore();
</script>

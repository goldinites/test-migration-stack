<template>
  <div class="text-2xl font-semibold mb-4">{{ counterStore.count }}</div>
  <div class="flex gap-x-4 mb-6">
    <button
      class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      @click="counterStore.decrement"
    >
      {{ $t('decrement') }}
    </button>
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
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

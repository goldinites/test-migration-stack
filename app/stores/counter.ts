import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);

  const increment = (): void => {
    if (count.value === 10) return;

    count.value++;
  };

  const decrement = (): void => {
    if (count.value === 0) return;

    count.value--;
  };

  return { count, increment, decrement };
});

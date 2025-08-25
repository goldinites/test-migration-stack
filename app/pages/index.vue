<template>
  <div>
    <div class="flex flex-col">
      <NuxtLink class="text-blue-500" to="/evakuator-dlya-spectekhniki/traktora/">
        Эвакуатор для трактора
      </NuxtLink>
      <NuxtLink class="text-blue-500" to="/contacts">Контакты</NuxtLink>
    </div>

    <ResponseData :data="data" />
  </div>
</template>

<script setup lang="ts">
  const { data } = await useFetch(`/api/page/home`);
  console.log('home page');
</script>

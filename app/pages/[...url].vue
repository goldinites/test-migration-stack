<template>
  <div>
    <div class="flex flex-col">
      <NuxtLink class="text-blue-500" to="/">Главная</NuxtLink>
      <NuxtLink class="text-blue-500" to="/contacts">Контакты</NuxtLink>
    </div>

    <ResponseData :data="data" />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const { data } = await useFetch(`/api/page/${route.path}`);
  console.log('other page');
</script>

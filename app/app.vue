<template>
  <div class="px-8 py-4">
    <Counter />
    <UsersList v-if="data?.users?.length" :users="data.users" />
  </div>
</template>

<script setup lang="ts">
  const { data } = await useFetch<UsersResponse>('/api/users/list', {
    query: { limit: 15 },
  });
</script>

<template>
  <h1 class="text-5xl">{{ $t('users') }}</h1>
  <AccordionRoot type="multiple" class="mt-6 w-full">
    <AccordionItem
      v-for="user in users"
      :key="user.id"
      :value="user.id.toString()"
      class="mt-px overflow-hidden first:mt-0"
    >
      <AccordionHeader class="flex">
        <AccordionTrigger
          class="group flex flex-1 items-center gap-x-2 py-4 px-5 text-sm font-medium border border-gray-200"
        >
          <div class="flex items-center flex-1 gap-x-2">
            <AvatarRoot
              class="bg-blackA3 inline-flex size-8 select-none items-center justify-center overflow-hidden rounded-full align-middle"
            >
              <AvatarImage
                class="h-full w-full rounded-[inherit] object-cover"
                :src="user.image"
                :alt="getUserFullName(user)"
              />
              <AvatarFallback
                class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                :delay-ms="600"
              >
                {{ getUserInitials(user) }}
              </AvatarFallback>
            </AvatarRoot>
            <span>{{ getUserFullName(user) }}</span>
          </div>
          <svg
            class="h-4 w-4 shrink-0 text-slate-500 ease-[cubic-bezier(0.87,0,0.13,1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.5L8 10.5L13 5.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="overflow-hidden text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
        style="--slide-down-duration: 150ms; --slide-up-duration: 150ms"
      >
        <div class="px-5 py-4 text-slate-700">
          <div>
            <span class="font-medium">Email:</span>
            <span>{{ user.email }}</span>
          </div>
          <div>
            <span class="font-medium">Company:</span>
            <span>{{ user.company.title }}</span>
          </div>
          <div>
            <span class="font-medium">Address:</span>
            <span>{{ user.address.address }}</span>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<script setup lang="ts">
  import {
    AccordionContent,
    AccordionHeader,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
  } from 'radix-vue';

  defineProps<{
    users: User[];
  }>();

  const getUserInitials = (user: User) => {
    return user.firstName.charAt(0) + user.lastName.charAt(0);
  };

  const getUserFullName = (user: User) => {
    return `${user.firstName} ${user.lastName}`;
  };
</script>

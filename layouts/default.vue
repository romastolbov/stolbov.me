<script setup lang="ts">
import { useHead } from "#imports";
import { AUTHOR } from "~/utils/constants";

useHead({
  titleTemplate: title => title ? `${title} — ${AUTHOR}` : AUTHOR
})
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>

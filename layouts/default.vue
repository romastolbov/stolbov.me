<script lang="ts">
import { AUTHOR, defineComponent, useHead } from '#imports'

import TheFooter from '~/components/TheFooter/index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    TheFooter,
  },
  setup() {
    useHead({
      titleTemplate: title => title ? `${title} — ${AUTHOR}` : AUTHOR,
    })
  },
})
</script>

<template>
  <main>
    <NuxtPage />
    <TheFooter />
  </main>
</template>

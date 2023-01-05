<script lang="ts">
import { defineComponent } from '#imports'

import Post from '~/components/Post/index.vue'
import NotFound from '~/components/NotFound/index.vue'

export default defineComponent({
  name: 'PostPage',
  components: {
    Post,
    NotFound,
  },
})
</script>

<template>
  <section>
    <div class="container container--small">
      <NuxtLink to="/">
        Назад
      </NuxtLink>
      <ContentDoc>
        <template #default="{ doc }">
          <Post :post="doc" />
        </template>
        <template #not-found>
          <NotFound />
        </template>
      </ContentDoc>
    </div>
  </section>
</template>

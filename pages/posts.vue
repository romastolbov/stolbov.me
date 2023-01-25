<script lang="ts">
import { AUTHOR, defineComponent, useHead } from '#imports'

import TheBlock from '~/components/TheBlock/index.vue'
import PostList from '~/components/PostList/index.vue'

export default defineComponent({
  name: 'PostsPage',
  components: {
    TheBlock,
    PostList,
  },
  setup() {
    useHead({
      title: 'Список постов',
    })
  },
})
</script>

<template>
  <section class="posts-page">
    <article class="container">
      <div class="posts-page__inner">
        <NuxtLink to="/">
          Назад
        </NuxtLink>
        <TheBlock title="Список постов">
          <PostList />
        </TheBlock>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
.posts-page {
  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 50px;
  }
}
</style>

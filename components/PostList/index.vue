<script lang="ts">
import { defineComponent } from '#imports'

import PostListItem from '~/components/PostListItem/index.vue'

export default defineComponent({
  name: 'PostList',
  components: {
    PostListItem,
  },
})
</script>

<template>
  <div class="post-list">
    <ContentList v-slot="{ list }">
      <PostListItem
        v-for="post in list"
        :key="post._path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :link="post._path"
        class="post-list__item"
      />
    </ContentList>
  </div>
</template>

<style lang="scss">
.post-list {
  display: flex;
  flex-direction: column;
}
</style>

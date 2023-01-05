<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<template>
  <article class="post">
    <header class="post__header">
      <h1>
        {{ post.title }}
      </h1>
      <time
        :datetime="post.date"
        class="post__date"
      >
        {{ post.date }}
      </time>
    </header>
    <ContentRenderer
      :value="post"
      class="post__content"
    />
  </article>
</template>

<style lang="scss">
.post {
  h1 {
    margin: 2rem 0 0;
  }

  &__header {
    margin-bottom: 3.5rem;
  }

  &__date {
    display: inline-block;
    margin: 8px 0;
    font-size: 14px;
    color: var(--secondary)
  }

  &__content {
    & > :nth-last-child(-n+2) {
      margin-bottom: 0;
    }
  }
}
</style>

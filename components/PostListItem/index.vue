<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'PostListItem',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    date: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>

<template>
  <article class="post-list-item">
    <h3 class="post-list-item__title">
      <NuxtLink :to="link">
        {{ title }}
      </NuxtLink>
    </h3>

    <p
      v-if="description"
      class="post-list-item__description"
    >
      {{ description }}
    </p>

    <time
      class="post-list-item__date"
      :datetime="date"
    >
      {{ date }}
    </time>
  </article>
</template>

<style lang="scss">
.post-list-item {
  padding-bottom: 1.5rem;
  font-size: var(--small-size);

  &:last-of-type {
    padding-bottom: 0;
  }

  &__title {
    font-size: var(--small-size);
    line-height: 1.75;
    margin: 0;
  }

  &__description {
    color: var(--secondary);
  }

  &__date {
    display: inline-block;
    font-size: var(--small-size);
    color: var(--secondary);
    margin: 0.5rem 0 0;
  }
}
</style>

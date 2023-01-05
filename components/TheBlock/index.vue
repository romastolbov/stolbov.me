<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'TheBlock',
  props: {
    isMain: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>

<template>
  <div
    :class="{ 'block--main': isMain }"
    class="block"
  >
    <h1 v-if="isMain">
      {{ title }}
    </h1>
    <h2 v-else>
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

<style lang="scss">
.block {
  h1, h2 {
    font-size: 100%;
    margin: 0 0 2rem;
  }

  p {
    font-size: var(--small-size);
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &--main {
    p {
      color: var(--secondary);
    }

    a {
      font-weight: 500;
      color: var(--color);
    }
  }
}
</style>

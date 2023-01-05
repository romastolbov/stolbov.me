<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'NotFound',
})
</script>

<template>
  <div class="not-found">
    <img
      class="not-found__image"
      src="/vincent.gif"
      alt="Озадаченный Винсент"
    >
  </div>
</template>

<style lang="scss">
.not-found {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 50px;

  &__image {
    max-width: 250px;
    height: auto;
    margin: 0;
  }
}
</style>

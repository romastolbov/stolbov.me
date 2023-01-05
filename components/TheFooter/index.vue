<script lang="ts">
import { AUTHOR, defineComponent } from '#imports'

export default defineComponent({
  name: 'TheFooter',
  setup() {
    const author = AUTHOR
    return { author }
  },
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright">
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
        >
          CC BY-NC-SA 4.0 2023
        </a> © {{ author }}
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding-top: 100px;

  &__copyright {
    padding-top: 25px;
    border-top: 1px solid var(--border);
    font-size: 14px;
    color: var(--secondary);

    a {
      color: var(--color);
    }
  }
}
</style>

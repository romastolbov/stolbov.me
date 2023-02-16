<script lang="ts">
import { defineComponent } from '#imports'

import SimpleIconsNuxtdotjs from '~/components/Icons/SimpleIconsNuxtdotjs.vue'

export default defineComponent({
  name: 'TheFooter',
  components: { SimpleIconsNuxtdotjs },
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          class="footer__copyright"
        >
          CC BY-NC-SA 4.0
        </a>
        <a
          href="https://nuxt.com/"
          target="_blank"
          class="footer__powered"
        >
          <SimpleIconsNuxtdotjs />
          Powered by Nuxt
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding-top: 100px;
  padding-bottom: var(--vertical-padding);

  &__inner {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    border-top: 1px solid var(--border);
    font-size: 13px;
  }

  &__copyright {
    color: var(--color);
  }

  &__powered {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--secondary);
  }
}
</style>

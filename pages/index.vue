<script lang="ts">
import { AUTHOR, defineComponent, useHead } from '#imports'

import TheBlock from '~/components/TheBlock/index.vue'
import PostList from '~/components/PostList/index.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    TheBlock,
    PostList,
  },
  setup() {
    const author = AUTHOR

    useHead({
      title: '',
    })

    return { author }
  },
})
</script>

<template>
  <section class="index-page">
    <article class="container">
      <div class="index-page__inner">
        <TheBlock
          :is-main="true"
          :title="author"
        >
          <p>
            Миддл фронтенд-разработчик в <a href="https://www.15web.ru/" target="_blank">Студии 15</a>. <br>
            Родился в Кирове, Россия.
            Живу на Бали, Индонезия.
          </p>
        </TheBlock>
        <TheBlock title="Мой стек">
          <p>
            Последние два года активно занимаюсь разработкой
            на фреймворке Vue.js (Nuxt.js).
            В работе использую TypeScript, SCSS, Jest, BEM.
          </p>
          <p>
            Пишу код на MacBook Air M1 2021 8 GB <br>
            и ПК Intel Core i7-8700 Windows 11 (+WSL 2).
          </p>
          <p>
            Вы можете найти меня в <a href="https://t.me/romastolbov" target="_blank">Telegram</a>
            или написать письмо на почту <a href="mailto:roma@stolbov.me">roma@stolbov.me</a>.
          </p>
        </TheBlock>
        <TheBlock title="Блог">
          <PostList />
        </TheBlock>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
.index-page {
  &__inner {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 100px;
  }
}
</style>

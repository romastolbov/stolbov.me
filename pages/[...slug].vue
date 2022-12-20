<template>
  <section class="post-page">
    <ContentDoc>
        <template #not-found>
            <NotFound class="post-page__not-found" />
        </template>
    </ContentDoc>
  </section>
</template>

<style lang="scss" scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &__not-found {
        margin: 0 auto;
    }
}
</style>
<template>
  <Card data-testid="article-card" class="article-card">
    <div class="article-card__cover-wrapper">
      <img :src="article.cover" :alt="article.title" class="article-card__cover" />
    </div>

    <div class="article-card__body">
      <h2 class="article-card__title">{{ article.title }}</h2>
      <p class="article-card__summary">{{ article.summary }}</p>

      <div class="article-card__footer">
        <div class="article-card__actions">
          <span class="article-card__likes">{{ article.likes }}</span>
          <q-btn flat round dense icon="favorite_border" class="action-btn" size="sm" />
          <q-btn flat round dense icon="sell" class="action-btn" size="sm" />
          <q-btn flat round dense icon="share" class="action-btn" size="sm" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from 'src/components/base/card/Card.vue';
import type { Article } from 'src/types/article';

defineProps<{
  article: Article;
}>();
</script>

<style scoped lang="scss">
.article-card {
  &__cover-wrapper {
    width: 100%;
    aspect-ratio: 3 / 2;
    padding: 12px 12px 0 12px;
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    transition: transform 0.3s ease;
  }

  &__body {
    flex-grow: 1;
    padding: 20px 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    color: #111827;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__summary {
    font-size: 14px;
    line-height: 1.5;
    color: #374151;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    margin-top: auto;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }

  &__likes {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin-right: 4px;
  }
}

.action-btn {
  color: #374151;

  &:hover {
    color: #111827;
  }
}
</style>

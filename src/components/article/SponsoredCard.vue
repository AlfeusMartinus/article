<template>
  <BaseCard data-testid="sponsored-card">
    <div class="sponsored-card__cover-wrapper">
      <img :src="article.cover" :alt="article.title" class="sponsored-card__cover" />
    </div>

    <div class="sponsored-card__body">
      <h2 class="sponsored-card__title">{{ article.title }}</h2>
      <p class="sponsored-card__summary">{{ article.summary }}</p>

      <div class="sponsored-card__footer">
        <span class="sponsored-card__label" data-testid="sponsored-label">Sponsored Ad</span>

        <div class="sponsored-card__actions">
          <span class="sponsored-card__likes">{{ article.likes }}</span>
          <q-btn flat round dense icon="favorite_border" class="action-btn" size="sm" />
          <q-btn
            flat
            round
            dense
            icon="bookmark"
            class="action-btn action-btn--sponsored"
            size="sm"
          />
          <q-btn flat round dense icon="share" class="action-btn" size="sm" />
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from 'src/components/base/BaseCard.vue';
import type { SponsoredArticle } from 'src/types/article';

defineProps<{
  article: SponsoredArticle;
}>();
</script>

<style scoped lang="scss">
.sponsored-card {
  &__cover-wrapper {
    width: 100%;
    aspect-ratio: 3 / 2;
    overflow: hidden;
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.04);
    }
  }

  &__body {
    padding: 16px 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__title {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.4;
    color: #1a1a2e;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__summary {
    font-size: 13px;
    line-height: 1.6;
    color: #6b7280;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    margin-top: 8px;
    border-top: 1px solid #f3f4f6;
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__label {
    font-size: 12px;
    font-weight: 600;
    color: #2563eb;
    letter-spacing: 0.02em;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  &__likes {
    font-size: 13px;
    font-weight: 500;
    color: #374151;
    margin-right: 2px;
  }
}

.action-btn {
  color: #6b7280;

  &:hover {
    color: #1a1a2e;
  }

  &--sponsored {
    color: #2563eb;
  }
}
</style>

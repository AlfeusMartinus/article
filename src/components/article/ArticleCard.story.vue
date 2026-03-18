<template>
  <Story title="Article/ArticleCard" group="article" :layout="{ type: 'grid', width: 380 }">
    <Variant title="Default">
      <ArticleCard :article="mockArticle" />
    </Variant>

    <Variant title="Bookmarked">
      <ArticleCard :article="mockArticleBookmarked" />
    </Variant>

    <Variant title="Long Title">
      <ArticleCard :article="longTitleArticle" />
    </Variant>

    <Variant title="Short Summary">
      <ArticleCard :article="shortSummaryArticle" />
    </Variant>

    <Variant title="Playground">
      <ArticleCard
        :article="{
          title: state.title,
          cover: state.cover,
          summary: state.summary,
          bookmarked: state.bookmarked,
          likes: state.likes,
        }"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ArticleCard from './ArticleCard.vue';
import { mockArticle, mockArticleBookmarked } from 'src/test-utils/fixtures/article.fixtures';
import type { Article } from 'src/types/article';

const longTitleArticle: Article = {
  title: 'This Is A Very Long Article Title That Should Get Properly Clamped After Two Lines Of Text',
  cover: 'https://picsum.photos/600/400?random=20',
  summary: 'Short summary here.',
  bookmarked: false,
  likes: 12,
};

const shortSummaryArticle: Article = {
  title: 'Concise Title',
  cover: 'https://picsum.photos/600/400?random=21',
  summary: 'Brief.',
  bookmarked: false,
  likes: 3,
};

const state = reactive({
  title: 'Dynamic Article Title',
  cover: 'https://picsum.photos/600/400?random=30',
  summary: 'Edit this summary in the controls panel to see how the card adapts.',
  bookmarked: false,
  likes: 42,
});
</script>

<docs lang="md">
# ArticleCard

Displays a single regular article entry. Used within `ArticleGrid` for normal feed items.

## Usage

```vue
<ArticleCard :article="article" />
```

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| `article` | `Article` | ✅ | The article data object to display |

## Article Type

```ts
interface Article {
  title: string;
  cover: string;
  summary: string;
  bookmarked: boolean;
  likes: number;
}
```

## Variants

| Variant | Description |
|---|---|
| Default | Standard article, not bookmarked |
| Bookmarked | Same article with `bookmarked: true` (bookmark icon changes) |
| Long Title | Tests how title gets clamped after 2 lines |
| Short Summary | Tests how the card stretches to fill row height |
| Playground | Fully interactive — controls all props live |

## Notes

- `flex-grow: 1` on the body ensures card height stretches to match its row siblings.
- `margin-top: auto` on the footer pins actions to the bottom regardless of content length.
- Title clamped at **2 lines**, summary at **3 lines** via `-webkit-line-clamp`.
</docs>

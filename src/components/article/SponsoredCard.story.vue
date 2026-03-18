<template>
  <Story title="Article/SponsoredCard" group="article" :layout="{ type: 'grid', width: 380 }">
    <Variant title="Default">
      <SponsoredCard :article="mockSponsoredArticle" />
    </Variant>

    <Variant title="Long Title">
      <SponsoredCard :article="longTitleSponsored" />
    </Variant>

    <Variant title="Short Summary">
      <SponsoredCard :article="shortSummarySponsored" />
    </Variant>

    <Variant title="Playground">
      <SponsoredCard
        :article="{
          title: state.title,
          cover: state.cover,
          summary: state.summary,
          bookmarked: state.bookmarked,
          likes: state.likes,
          isSponsored: true,
        }"
      />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SponsoredCard from './SponsoredCard.vue';
import { mockSponsoredArticle } from 'src/test-utils/fixtures/article.fixtures';
import type { SponsoredArticle } from 'src/types/article';

const longTitleSponsored: SponsoredArticle = {
  title:
    'This Sponsored Article Has An Extremely Long Title To Test The Clamp Behaviour Extensively',
  cover: 'https://picsum.photos/600/400?random=40',
  summary: 'Short sponsored summary.',
  bookmarked: true,
  likes: 99,
  isSponsored: true,
};

const shortSummarySponsored: SponsoredArticle = {
  title: 'Short Sponsored Title',
  cover: 'https://picsum.photos/600/400?random=41',
  summary: 'Tiny.',
  bookmarked: false,
  likes: 5,
  isSponsored: true,
};

const state = reactive({
  title: 'Dynamic Sponsored Title',
  cover: 'https://picsum.photos/600/400?random=50',
  summary: 'Edit this in the controls to preview the sponsored card interactively.',
  bookmarked: true,
  likes: 72,
});
</script>

<docs lang="md">
# SponsoredCard

Displays a promoted/sponsored article with a distinct visual treatment. Used in `ArticleGrid` at **prime-number indices > 3** (e.g. position 3, 5, 7, 11…).

## Usage

```vue
<SponsoredCard :article="sponsoredArticle" />
```

## Props

| Prop      | Type               | Required | Description                                            |
| --------- | ------------------ | -------- | ------------------------------------------------------ |
| `article` | `SponsoredArticle` | ✅       | Sponsored article data (must have `isSponsored: true`) |

## SponsoredArticle Type

```ts
interface SponsoredArticle extends Article {
  isSponsored: true;
}
```

## Variants

| Variant       | Description                                 |
| ------------- | ------------------------------------------- |
| Default       | Standard sponsored card                     |
| Long Title    | Tests 2-line clamp on title                 |
| Short Summary | Tests flex-grow stretch in grid row         |
| Playground    | Fully interactive — controls all props live |

## Visual Differences from ArticleCard

| Feature        | ArticleCard                  | SponsoredCard              |
| -------------- | ---------------------------- | -------------------------- |
| Label          | ❌                           | ✅ "Sponsored Ad" (blue)   |
| Tag icon color | Gray                         | Blue                       |
| Footer layout  | Actions only (right-aligned) | Label left + Actions right |

## Notes

- The "Sponsored Ad" label (`data-testid="sponsored-label"`) is used as the E2E anchor for Playwright tests.
- Card height is equalized via `flex-grow: 1` on the body and `margin-top: auto` on the footer.
</docs>

<template>
  <Story title="Article/Card" group="article" :layout="{ type: 'grid', width: 400 }">
    <Variant title="Regular Article">
      <ArticleCard :article="mockArticle" />
    </Variant>

    <Variant title="Bookmarked Article">
      <ArticleCard :article="mockArticleBookmarked" />
    </Variant>

    <Variant title="Sponsored Ad">
      <SponsoredCard :article="mockSponsoredArticle" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import ArticleCard from './ArticleCard.vue';
import SponsoredCard from './SponsoredCard.vue';
import { mockArticle, mockArticleBookmarked, mockSponsoredArticle } from 'src/test-utils/fixtures/article.fixtures';
</script>

<docs lang="md">
# Article Components
This story showcases the different types of cards used in the article list.

## Variants
- **Regular Article**: Standard article representation.
- **Bookmarked Article**: Article with a bookmarked state (visual cue).
- **Sponsored Ad**: Visually distinct card for promoted content, featuring the "Sponsored Ad" label.

## Shared Attributes
All cards feature:
- Cover image with consistent padding.
- Multi-line title and summary support.
- Action cluster including likes, tags, and share buttons.
</docs>

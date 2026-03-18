import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Quasar } from 'quasar';
import ArticleCard from 'src/components/article/ArticleCard.vue';
import type { Article } from 'src/types/article';

const mockArticle: Article = {
  title: 'Test Article Title',
  cover: 'https://picsum.photos/600/400',
  summary: 'A short test summary for the article.',
  bookmarked: false,
  likes: 42,
};

function mountArticleCard(article: Article) {
  return mount(ArticleCard, {
    props: { article },
    global: { plugins: [Quasar] },
  });
}

describe('ArticleCard', () => {
  it('renders the article title', () => {
    const wrapper = mountArticleCard(mockArticle);
    expect(wrapper.text()).toContain('Test Article Title');
  });

  it('renders the article summary', () => {
    const wrapper = mountArticleCard(mockArticle);
    expect(wrapper.text()).toContain('A short test summary for the article.');
  });

  it('renders the likes count', () => {
    const wrapper = mountArticleCard(mockArticle);
    expect(wrapper.text()).toContain('42');
  });

  it('does not render a sponsored label', () => {
    const wrapper = mountArticleCard(mockArticle);
    expect(wrapper.text()).not.toContain('Sponsored Ad');
  });

  it('renders the cover image with correct src', () => {
    const wrapper = mountArticleCard(mockArticle);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockArticle.cover);
  });

  it('has data-testid attribute', () => {
    const wrapper = mountArticleCard(mockArticle);
    expect(wrapper.find('[data-testid="article-card"]').exists()).toBe(true);
  });
});

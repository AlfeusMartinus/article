import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Quasar } from 'quasar';
import ArticleCard from 'src/components/article/ArticleCard.vue';
import { mockArticle } from 'src/test-utils/fixtures/article.fixtures';

function mountArticleCard() {
  return mount(ArticleCard, {
    props: { article: mockArticle },
    global: { plugins: [Quasar] },
  });
}

describe('ArticleCard', () => {
  it('renders the article title', () => {
    const wrapper = mountArticleCard();
    expect(wrapper.text()).toContain(mockArticle.title);
  });

  it('renders the article summary', () => {
    const wrapper = mountArticleCard();
    expect(wrapper.text()).toContain(mockArticle.summary);
  });

  it('renders the likes count', () => {
    const wrapper = mountArticleCard();
    expect(wrapper.text()).toContain(mockArticle.likes.toString());
  });

  it('does not render a sponsored label', () => {
    const wrapper = mountArticleCard();
    expect(wrapper.text()).not.toContain('Sponsored Ad');
  });

  it('renders the cover image with correct src', () => {
    const wrapper = mountArticleCard();
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockArticle.cover);
  });

  it('has data-testid attribute', () => {
    const wrapper = mountArticleCard();
    expect(wrapper.find('[data-testid="article-card"]').exists()).toBe(true);
  });
});

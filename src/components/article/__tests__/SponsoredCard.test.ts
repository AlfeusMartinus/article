import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SponsoredCard from 'src/components/article/SponsoredCard.vue';
import { mockSponsoredArticle } from 'src/test-utils/fixtures/article.fixtures';

function mountSponsoredCard() {
  return mount(SponsoredCard, {
    props: { article: mockSponsoredArticle },
    global: { stubs: ['q-btn'] },
  });
}

describe('SponsoredCard', () => {
  it('renders the sponsored article title', () => {
    const wrapper = mountSponsoredCard();
    expect(wrapper.text()).toContain(mockSponsoredArticle.title);
  });

  it('renders the sponsored label', () => {
    const wrapper = mountSponsoredCard();
    expect(wrapper.find('[data-testid="sponsored-label"]').text()).toBe('Sponsored Ad');
  });

  it('renders the likes count', () => {
    const wrapper = mountSponsoredCard();
    expect(wrapper.text()).toContain(mockSponsoredArticle.likes.toString());
  });

  it('renders the cover image', () => {
    const wrapper = mountSponsoredCard();
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockSponsoredArticle.cover);
  });

  it('has data-testid attribute', () => {
    const wrapper = mountSponsoredCard();
    expect(wrapper.find('[data-testid="sponsored-card"]').exists()).toBe(true);
  });
});

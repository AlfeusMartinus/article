import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { Quasar } from 'quasar';
import SponsoredCard from 'src/components/article/SponsoredCard.vue';
import type { SponsoredArticle } from 'src/types/article';

const mockSponsored: SponsoredArticle = {
  title: 'Sponsored Article Title',
  cover: 'https://picsum.photos/600/400',
  summary: 'A sponsored summary text.',
  bookmarked: true,
  likes: 15,
  isSponsored: true,
};

function mountSponsoredCard(article: SponsoredArticle) {
  return mount(SponsoredCard, {
    props: { article },
    global: { plugins: [Quasar] },
  });
}

describe('SponsoredCard', () => {
  it('renders the sponsored article title', () => {
    const wrapper = mountSponsoredCard(mockSponsored);
    expect(wrapper.text()).toContain('Sponsored Article Title');
  });

  it('renders the sponsored label', () => {
    const wrapper = mountSponsoredCard(mockSponsored);
    expect(wrapper.find('[data-testid="sponsored-label"]').text()).toBe('Sponsored Ad');
  });

  it('renders the likes count', () => {
    const wrapper = mountSponsoredCard(mockSponsored);
    expect(wrapper.text()).toContain('15');
  });

  it('renders the cover image', () => {
    const wrapper = mountSponsoredCard(mockSponsored);
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(mockSponsored.cover);
  });

  it('has data-testid attribute', () => {
    const wrapper = mountSponsoredCard(mockSponsored);
    expect(wrapper.find('[data-testid="sponsored-card"]').exists()).toBe(true);
  });
});

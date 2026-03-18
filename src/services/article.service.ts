import axios from 'axios';
import type { Article } from 'src/types/article';

const ARTICLES_URL =
  'https://gist.githubusercontent.com/shafhik/2066a4cc87807262d4823fb3bdb2e1d4/raw/d0c3c3612b40649b4869dd5d5adb39d819fd8db3/articles.json';

export class ArticleService {
  async fetchArticles(): Promise<Article[]> {
    const { data } = await axios.get<Article[]>(ARTICLES_URL);
    return data;
  }
}

export const articleService = new ArticleService();

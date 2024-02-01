import getStockArticlesTitle  from '../src/utils/getStockArticlesTitle';
import { describe, expect, it } from 'vitest';

const fakeProductTest = {
  id: 123,
  title: "produit",
  price: 5,
  description: 'faux produit pour test',
  category: {
    id: 1,
    name: "category",
    image: "url"
  },
  images: ["url"]
};

describe('function getStockArticlesTitle" ', () => {
  it("getStockArticlesTitle([]) doit retourner 'aucun article disponible'", () => {
    const messageArticle = getStockArticlesTitle([]);
    expect(messageArticle).toBe('Aucun article disponible');
  });
  it("getStockArticlesTitle([{},{}]) doit retourner '2 articles disponibles'", () => {
    const messageArticle = getStockArticlesTitle([fakeProductTest, fakeProductTest]);
    expect(messageArticle).toBe('2 articles disponibles');
  });
  it("getStockArticlesTitle([{}]) doit retourner '1 article disponible'", () => {
    const messageArticle = getStockArticlesTitle([fakeProductTest]);
    expect(messageArticle).toBe('Un article disponible');
  });
});

import { getStockArticlesTitle } from '../src/utils/Utils';
import test from 'node:test';
import { describe, expect, it } from 'vitest';

describe('function getStockArticlesTitle" ', () => {
  it("getStockArticlesTitle([]) doit retourner 'aucun article disponible'", () => {
    const messageArticle = getStockArticlesTitle([]);
    expect(messageArticle).toBe('Aucun article disponible');
  });
  it("getStockArticlesTitle([{},{}]) doit retourner '2 articles disponibles'", () => {
    const messageArticle = getStockArticlesTitle([{}, {}]);
    expect(messageArticle).toBe('2 articles disponibles');
  });
  it("getStockArticlesTitle([{}]) doit retourner '1 article disponible'", () => {
    const messageArticle = getStockArticlesTitle([{}]);
    expect(messageArticle).toBe('Un article disponible');
  });
});

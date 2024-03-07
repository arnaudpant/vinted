/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import ArticlesGallery from '@/components/page-infos-article/ArticlesGallery';
import { ArticleForSale } from '@/types/types';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

vi.mock('../src/context/FakeShopContext');

const FakeArticle: ArticleForSale = {
  uid: 'testid',
  titleArticle: 'Fake Article',
  price: 99,
  descriptionArticle: 'Faux article pour tests',
  category: 'femmes',
  subCategory: 'other',
  photos: ['https://www.fakearticle.jpg'],
  brandArticle: 'test',
  etat: 'Neuf',
  color: 'bleu',
  like: 10,
  userInfos: {
    userId: "userid",
    photoURL:"matronche.jpeg",
    login:"mon-nom",
    city:"Paris",
    stars:5,
    evaluations:10
  }
};

describe('Initialisation du Modal', () => {
  beforeEach(() => {
    act(() => {
      render(
        <BrowserRouter>
          <ArticlesGallery article={FakeArticle} />
        </BrowserRouter>,
      );
    });
  });

  afterEach(() => {
    cleanup();
  });

  test('Affichage photo article avec bonne description', () => {
    expect(screen.getByAltText(/Faux article pour tests/i)).toBeInTheDocument();
  });
});

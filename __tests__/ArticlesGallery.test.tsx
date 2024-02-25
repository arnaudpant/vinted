/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import ArticlesGallery from '@/components/page-infos-article/ArticlesGallery';
import { FakeProduct } from '@/types/types';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

vi.mock('../src/context/FakeShopContext');

const FakeArticle: FakeProduct = {
  id: 10,
  title: 'Fake Article',
  price: 99,
  description: 'Faux article pour tests',
  creationAt: 'test',
  category: {
    id: 1,
    name: 'Fake category',
    image: 'https://www.fakearticle.jpg',
  },
  images: ['https://www.fakearticle.jpg'],
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

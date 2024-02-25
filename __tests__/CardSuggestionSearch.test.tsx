import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardSuggestionSearch from '../src/components/page-home/suggestion/CardSuggestionSearch';
import { SuggestSearchList } from './../src/types/types';

const fakeSuggestSearchListK: SuggestSearchList = {
  brand: 'marque du produit',
  views: 100,
};

const fakeSuggestSearchListM: SuggestSearchList = {
  brand: 'marque du produit',
  views: 9,
};

test('Le titre de CardSuggestionSearch doit être Marque du produit', () => {
  render(<CardSuggestionSearch key={1} product={fakeSuggestSearchListK} />);
  expect(screen.getByText(/marque du produit/i)).toBeInTheDocument();
});

describe('Doit afficher M ou K pour le nombre de vues', () => {
  test('Tests si affichage du K pour le nombre de vues de CardSuggestionSearc', () => {
    render(<CardSuggestionSearch key={1} product={fakeSuggestSearchListK} />);
    expect(screen.getByText(/K vues/i)).toBeInTheDocument();
    expect(screen.queryByText(/M vues/i)).not.toBeInTheDocument();
  });

  test('Tests si affichage du M pour le nombre de vues de CardSuggestionSearch', () => {
    render(<CardSuggestionSearch key={1} product={fakeSuggestSearchListM} />);
    expect(screen.getByText(/M vues/i)).toBeInTheDocument();
    expect(screen.queryByText(/K vues/i)).not.toBeInTheDocument();
  });
});

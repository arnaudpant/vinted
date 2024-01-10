import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardSuggestionSearch from './../src/components/suggestion/CardSuggestionSearch';
import {SuggestSearchList} from './../src/types/types'

const fakeSuggestSearchListK: SuggestSearchList = {
  brand: 'marque du produit',
  views: 100,
};

const fakeSuggestSearchListM: SuggestSearchList = {
  brand: 'marque du produit',
  views: 9,
};

test('Tests si affichage du bon titre', () => {
  render(<CardSuggestionSearch key={1} product={fakeSuggestSearchListK} />);
  expect(screen.getByText(/marque du produit/i)).toBeInTheDocument();
});


describe('Affichage de M ou K', () => {
  test('Tests si affichage du K', () => {
    render(<CardSuggestionSearch key={1} product={fakeSuggestSearchListK} />);
    expect(screen.getByText(/K vues/i)).toBeInTheDocument();
    expect(screen.queryByText(/M vues/i)).not.toBeInTheDocument();
  });

  test('Tests si affichage du M', () => {
    render(<CardSuggestionSearch key={1} product={fakeSuggestSearchListM} />);
    expect(screen.getByText(/M vues/i)).toBeInTheDocument();
    expect(screen.queryByText(/K vues/i)).not.toBeInTheDocument();
  });
})
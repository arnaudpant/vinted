import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuggestionSearch from './../src/components/suggestion/SuggestionSearch';


test('Titre present', () => {
  render(<SuggestionSearch />);
  const title = screen.getByRole('heading', { level: 2 });
  expect(title).toBeInTheDocument();
});

test('Affichage des 10 suggestions', () => {
  render(<SuggestionSearch />);
  const products = screen.queryAllByTestId('cardSuggestion');
  expect(products).toHaveLength(10);
  screen.debug();
});

test('Initialisation = 1 bouton fleche', () => {
   render(<SuggestionSearch />);
   const boutonsScrollY = screen.getAllByRole('button')
   expect(boutonsScrollY).toHaveLength(1)
})
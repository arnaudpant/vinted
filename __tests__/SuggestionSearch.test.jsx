import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuggestionSearch from './../src/components/suggestion/SuggestionSearch';


test('Titre present', async () => {
  render(<SuggestionSearch />);
  const title = screen.getByRole('heading', { level: 2 });
  expect(title).toBeInTheDocument();
});

test('Affichage des 10 suggestions', async () => {
  render(<SuggestionSearch />);
  const products = await screen.queryAllByTestId('cardSuggestion');
  expect(products).toHaveLength(10);
  screen.debug();
});

test('Initialisation = 1 bouton fleche', () => {
   render(<SuggestionSearch />);
   const boutonsScrollY = screen.getAllByRole('button')
   const scrollDiv = screen.getByTestId('scroll-element');
   expect(boutonsScrollY).toHaveLength(1)
})
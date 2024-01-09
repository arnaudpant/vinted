import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuggestionSearch from './../src/components/suggestion/SuggestionSearch'


describe('Tests barre SuggestionSearch', () => {
    test('Situation initial au render', async () => {
        render(<SuggestionSearch />)
        const title = screen.getByRole("heading", {level: 2})
        const products = await screen.queryAllByTestId('cardSuggestion');
        expect(title).toBeInTheDocument()
        expect(products).toHaveLength(6);
        screen.debug();
    })
});
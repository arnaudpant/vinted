import React from 'react';
import '@testing-library/jest-dom';
import { afterEach, describe, expect, test } from 'vitest';
import BoxInfosVendeur from './../src/components/box-infos-vendeur/BoxInfosVendeur';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

describe('Initialisation du component BoxInfosVendeur', () => {
  afterEach(() => {
    cleanup();
  });
  test('Affichage infos reduit', () => {
    render(<BoxInfosVendeur />);
    expect(screen.getByText(/... Voir plus/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/droit des obligations/i),
    ).not.toBeInTheDocument();
  });
  test('Clic sur Voir plus', () => {
    render(<BoxInfosVendeur />);
    const seeMore = screen.getByText(/... Voir plus/i);
    fireEvent.click(seeMore);
    expect(screen.queryByText(/... Voir plus/i)).not.toBeInTheDocument();
    expect(screen.getByText(/responsabilité civile/i)).toBeInTheDocument();
  });
});

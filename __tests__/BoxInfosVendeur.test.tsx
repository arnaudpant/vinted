import React from 'react';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import BoxInfosVendeur from './../src/components/box-infos-vendeur/BoxInfosVendeur'
import { render, screen } from '@testing-library/react';

describe('Initialisation du component BoxInfosVendeur', ()=> {
    test('Affichage infos reduit', ()=> {
        render(<BoxInfosVendeur />)
        expect(screen.getByText(/... Voir plus/i)).toBeInTheDocument();
    })
})
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@testing-library/jest-dom';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ModalAuthView from '@/components/modals/authentification/ModalAuthView';

describe('Tests affichage du Modal de connexion en init', () => {
  afterEach(() => {
    cleanup();
  });

  test('Initialisation du modal avec btn X en partie superieur et clic sur X', async () => {
    const handleClickMock = vi.fn();
    render(
      <ModalAuthView
        handleClick={handleClickMock}
        setModalConnexion={() => {}}
      />,
    );
    const label = await screen.findByLabelText(/Fermer la fenêtre/i);
    expect(label).toBeInTheDocument();
    fireEvent.click(label);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  test('Affichage initial du modal avec ModalAuthInitView', async () => {
    render(
      <ModalAuthView handleClick={() => {}} setModalConnexion={() => {}} />,
    );
    const bienvenue = await screen.findByText(/Bienvenue !/i);
    expect(bienvenue).toBeInTheDocument();
    expect(screen.queryByText(/Se connecter/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Inscris-toi avec ton email/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Mot de passe oublié ?/i),
    ).not.toBeInTheDocument();
        const btnReseaux = await screen.findAllByRole('button');
        expect(btnReseaux.length).toEqual(6);
      });
});


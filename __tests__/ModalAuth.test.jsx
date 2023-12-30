import React from 'react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalAuth from '../src/components/modals/authentification/ModalAuth';


describe('Initialisation du Modal', () => {
  beforeEach(() => {
    render(<ModalAuth />);
  });

  test('Initialisation du modal avec btn X en partie superieur', () => {
    expect(screen.getByLabelText(/Fermer la fenêtre/i)).toBeInTheDocument();
  });

  test('Affichage du modal avec ModalAuthInitView en partie inferieure', () => {
    expect(screen.getByText(/Bienvenue !/i)).toBeInTheDocument();
  });

  test('Affichage du modal sans ModalAuthConnexionView en partie inferieure', () => {
    expect(screen.queryByText(/Se connecter/i)).not.toBeInTheDocument();
  });

  test('Affichage du modal sans ModalAuthInscription en partie inferieure', () => {
    expect(
      screen.queryByText(/Inscris-toi avec ton email/i),
    ).not.toBeInTheDocument();
  });

  test('Affichage du modal sans ModalPasswordForget en partie inferieure', () => {
    expect(
      screen.queryByText(/Mot de passe oublié ?/i),
    ).not.toBeInTheDocument();
  });

});

describe('Inscription', () => {
  test('Clic sur btn Inscription', async () => {
    render(<ModalAuth />);
    const btnInscription = screen.getByText(/e-mail/i);
    expect(btnInscription).toBeInTheDocument().toBeInTheDocument();
    expect(screen.queryByText(/Continuer avec Apple/i));
    fireEvent.click(btnInscription);
    await expect(btnInscription).not.toBeInTheDocument();
    await expect(
      screen.queryByText(/Continuer avec Apple/i),
    ).not.toBeInTheDocument();
  });
});

describe('Connexion', () => {
  test('Clic sur btn Se Connecter', async () => {
    render(<ModalAuth />);
    const btnConnexion = screen.getByText(/e-mail/i);
    expect(btnConnexion).toBeInTheDocument();
    fireEvent.click(btnConnexion);
    await expect(btnConnexion).not.toBeInTheDocument();
    await expect(
      screen.queryByText(/Continuer avec Facebook/i),
    ).not.toBeInTheDocument();
  });
});



/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@testing-library/jest-dom';
import { afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import ModalAuth from '../src/components/modals/authentification/ModalAuth';
vi.mock('react-router-dom');

describe('Initialisation du Modal', () => {
  beforeEach(() => {
    render(<ModalAuth setModalConnexion={()=>{}} />);
  });
  afterEach(() => {
    cleanup();
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

  test('Affichage des 3 btn de connexion via facebook, google, apple + btn X', async () => {
    const btnReseaux = await screen.findAllByRole('button');
    expect(btnReseaux.length).toEqual(6);
  });
});

describe('Inscription et Connexion', () => {
  afterEach(() => {
    cleanup();
  });
  test('Clic sur btn Inscription', () => {
    render(<ModalAuth setModalConnexion={() => {}} />);
    const btnInscription = screen.getByText(/e-mail/i);
    expect(btnInscription).toBeInTheDocument();
    expect(screen.queryByText(/Continuer avec Apple/i));
    fireEvent.click(btnInscription);
    expect(btnInscription).not.toBeInTheDocument();
    expect(screen.queryByText(/Continuer avec Apple/i)).not.toBeInTheDocument();
  });

  test('Clic sur btn Se Connecter', () => {
    render(<ModalAuth setModalConnexion={() => {}} />);
    const btnConnexion = screen.getByText(/e-mail/i);
    expect(btnConnexion).toBeInTheDocument();
    fireEvent.click(btnConnexion);
    expect(btnConnexion).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Continuer avec Facebook/i),
    ).not.toBeInTheDocument();
  });
});



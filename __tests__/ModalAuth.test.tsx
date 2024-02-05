/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '@testing-library/jest-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import ModalAuth from '../src/components/modals/authentification/ModalAuth';
import { FakeShopProvider } from '@/context/FakeShopContext';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { act } from 'react-dom/test-utils';

vi.mock('react-router-dom');

const wrapperAuthUserContext = ({ children }: any) => {
  return <FakeShopProvider>{children}</FakeShopProvider>;
};

const fakeUser = {
  uid: 'azerty',
  email: 'fake-user@test.fr',
  displayName: 'fakeuser',
  emailVerified: true,
  photoURL: null,
};

describe('Initialisation du Modal', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useFirebaseAuth(), {
      wrapper: wrapperAuthUserContext,
    });

    act(() => {
      result.current.authUser = fakeUser;
      render(<ModalAuth setModalConnexion={() => {}} />);
    });
  });

  afterEach(() => {
    cleanup();
  });

  test('Initialisation du modal avec btn X en partie superieur', async () => {
    const label = await screen.findByLabelText(/Fermer la fenêtre/i);
    expect(label).toBeInTheDocument();
    screen.debug();
  });

  test('Affichage du modal avec ModalAuthInitView en partie inferieure', async () => {
    const bienvenue = await screen.findByText(/Bienvenue !/i);
    expect(bienvenue).toBeInTheDocument();
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
    screen.debug();
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

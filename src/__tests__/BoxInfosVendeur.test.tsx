/* eslint-disable @typescript-eslint/await-thenable */
import '@testing-library/jest-dom';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import BoxInfosVendeurView from '@/components/page-infos-article/box-infos-vendeur/BoxInfosVendeurView';

const vendeur = {
  userId: 'userDeTest',
  photoURL: 'ma-tronche.jpeg',
  login: 'moi',
  city: 'Paris',
  stars: 3,
  evaluations: 77,
};

describe('Test du component BoxInfosVendeurView', () => {
  afterEach(() => {
    cleanup();
  });

  vi.mock('react-router-dom');

  test('Affichageruser null pas image avatar et pas de texte déroulé', () => {
    render(
      <BoxInfosVendeurView
        seeMore={false}
        handleSeeMore={() => {}}
        vendeur={vendeur}
      />,
    );
    const imageAvatar = screen.queryByTestId(/img-user-avatar/i);
    const textDeroule = screen.queryByText(/responsabilité civile/i);
    const textVoirPlus = screen.getByText(/... Voir plus/i);
    const handleSeeMore = vi.fn();
    expect(imageAvatar).not.toBeInTheDocument();
    expect(textDeroule).not.toBeInTheDocument();
    expect(textVoirPlus).toBeInTheDocument();
    expect(handleSeeMore).toHaveBeenCalledTimes(0);
  });

  // test('Affichage avec user = FakeUserForTest', async () => {
  //   render(
  //     <BoxInfosVendeurView
  //       seeMore={false}
  //       handleSeeMore={() => {}}
  //       vendeur={vendeur}
  //     />,
  //   );
  //   const imageAvatar = await screen.findByTestId(/img-user-avatar/i);
  //   expect(imageAvatar).toBeInTheDocument();
  // });

  test('Affichage texte deroulé', () => {
    render(
      <BoxInfosVendeurView
        seeMore={true}
        handleSeeMore={() => {}}
        vendeur={vendeur}
      />,
    );
    console.log(vendeur.photoURL);
    const textDeroule = screen.getByText(/responsabilité civile/i);
    const textVoirPlus = screen.queryByText(/... Voir plus/i);
    expect(textDeroule).toBeInTheDocument();
    expect(textVoirPlus).not.toBeInTheDocument();
  });

  test('Click sur test', () => {
    const handleSeeMore = vi.fn();
    render(
      <BoxInfosVendeurView
        seeMore={false}
        handleSeeMore={handleSeeMore}
        vendeur={vendeur}
      />,
    );
    const textDeroule = screen.queryByText(/responsabilité civile/i);
    const textVoirPlus = screen.getByText(/... Voir plus/i);
    expect(textDeroule).not.toBeInTheDocument();
    expect(textVoirPlus).toBeInTheDocument();

    fireEvent.click(textVoirPlus);
    expect(handleSeeMore).toHaveBeenCalledTimes(1);
  });
});

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import NewArticle from '../src/pages/NewArticle';
import { act, render, renderHook, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import useFirebaseAuth from '../src/hooks/useFirebaseAuth';
import { UserInterface } from '@/types/types';


const fakeAuthUser: UserInterface = {
  uid: '123',
  email: 'alice@example.com',
  displayName: 'Alice',
  photoURL: 'https://example.com/alice.jpg',
  emailVerified: true,
};

const renderNewArticle = () => {
  render(<NewArticle />);
};

test("Le composant n'affiche pas le titre 'Vends ton article' et authUser est null", () => {
  const { result } = renderHook(() => useFirebaseAuth());
  renderNewArticle();
  const title = screen.queryByText(/vends ton article/i);
  expect(title).not.toBeInTheDocument();
  expect(result.current.authUser).toBeNull();
});

test("authUser non null: Le composant affiche pas le titre 'Vends ton article'", () => {
  
  const { result } = renderHook(() => useFirebaseAuth());
  act(() => {
    result.current.authUser = fakeAuthUser;
  });
  renderNewArticle();
  const { rerender } = renderHook(() => useFirebaseAuth());
  rerender(fakeAuthUser);
  expect(result.current.authUser).not.toBeNull();
});


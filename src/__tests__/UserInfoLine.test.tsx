import { cleanup, render, screen } from '@testing-library/react';
import { Star } from 'lucide-react';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import UserInfoLine from '../components/page-user-profil/models/UserInfoLine';

describe('Composant UserInfoLine comportement', () => {
  beforeEach(() => {
    render(<UserInfoLine ComponentPicture={<Star />}>titre</UserInfoLine>);
  });
  afterEach(() => {
    cleanup();
  });
  test('Présence du titre', () => {
    const title = screen.getByText(/titre/i);
    expect(title).toBeInTheDocument();
  });
});

import { cleanup, render, screen } from '@testing-library/react';
import { Star } from 'lucide-react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import UserInfoLine from '../src/components/userProfil/models/UserInfoLine';

describe('Composant UserInfoLine comportement', () => {
  beforeEach(() => {
    render(<UserInfoLine ComponentPicture={<Star />}>titre</UserInfoLine>);
  });
  afterEach(() => {
    cleanup();
  });
  test('Présence du titre', async () => {
    const title = screen.getByText(/titre/i);
    expect(title).toBeInTheDocument();
  });
});

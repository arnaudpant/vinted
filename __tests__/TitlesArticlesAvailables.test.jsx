const { render, screen } = require('@testing-library/react');
const React = require('react');
const { describe, expect } = require('vitest');
import { TitleArticlesAvailables } from '@/sr';

describe('Titres articles disponibles', () => {
  const { title } = render(<TitleArticlesAvailables />);
  expect();
});

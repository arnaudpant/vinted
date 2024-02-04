import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, test } from 'vitest';
import ArticleInfo from '../src/components/page-infos-article/ArticleInfo';
import  getBuyerProtectionFee  from '../src/utils/Utils';
import testProduct from '@/data/testProduct';

beforeEach(() => {
  render(<ArticleInfo article={testProduct} />);
});
afterEach(() => {
  cleanup();
});

test('Check article infos', () => {
  const { price, title, description } = testProduct;
  expect(screen.getByText(`${price} €`)).toBeInTheDocument();
  expect(
    screen.getByText(
      `${price + getBuyerProtectionFee(price, price)} € Protection acheteurs incluse`,
    ),
  ).toBeInTheDocument();
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(description)).toBeInTheDocument();
  expect(screen.getByText('Frais de Protection acheteurs')).toBeInTheDocument();
});

test('Price details modal', () => {
  const { price } = testProduct;
  const buyerProtectionFee = getBuyerProtectionFee(price, price);

  const buyerProtectionFeeIncludedPriceBtn = screen.getByText(
    `${price + buyerProtectionFee} € Protection acheteurs incluse`,
  );
  expect(buyerProtectionFeeIncludedPriceBtn).toBeInTheDocument();

  fireEvent.click(buyerProtectionFeeIncludedPriceBtn);
  const closeBtn = screen.getByLabelText(
    /Fermer la fenêtre des détails du prix/i,
  );
  const priceDetailsElt = screen.getByText('Détails du prix');
  expect(closeBtn).toBeInTheDocument();
  expect(priceDetailsElt).toBeInTheDocument();
  expect(screen.getAllByText(`${price} €`).length).toBe(2);
  expect(screen.getByText(`${buyerProtectionFee} €`)).toBeInTheDocument();

  fireEvent.click(closeBtn);
  expect(closeBtn).not.toBeInTheDocument();
  expect(priceDetailsElt).not.toBeInTheDocument();
});

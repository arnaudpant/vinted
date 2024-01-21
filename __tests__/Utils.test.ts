import getBuyerProtectionFee from '@/utils/getBuyerProtectionFee';
import getTimeDifferenceString from '@/utils/getTimeDifferenceString';
import { describe, expect, test } from 'vitest';

test('Test getBuyerProtectionFee', () => {
  const price = 5;
  expect(getBuyerProtectionFee(price)).toBe(0.3);
});

describe('Test getTimeDifferenceString', () => {
  test('Test result with minutes', () => {
    const newDate = new Date();
    newDate.setMinutes(newDate.getMinutes() - 1);
    expect(getTimeDifferenceString(newDate.toISOString())).toBe(
      'IL Y A 1 MINUTE.',
    );

    const newDate2 = new Date();
    const minuteDiff = 3;
    newDate2.setMinutes(newDate2.getMinutes() - minuteDiff);
    expect(getTimeDifferenceString(newDate2.toISOString())).toBe(
      `IL Y A ${minuteDiff} MINUTES.`,
    );
  });

  test('Test result with hours', () => {
    const newDate = new Date();
    newDate.setHours(newDate.getHours() - 1);
    expect(getTimeDifferenceString(newDate.toISOString())).toBe(
      'IL Y A 1 HEURE.',
    );

    const newDate2 = new Date();
    const hourDiff = 5;
    newDate2.setHours(newDate2.getHours() - hourDiff);
    expect(getTimeDifferenceString(newDate2.toISOString())).toBe(
      `IL Y A ${hourDiff} HEURES.`,
    );
  });

  test('Test result with days', () => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() - 1);
    expect(getTimeDifferenceString(newDate.toISOString())).toBe(
      'IL Y A 1 JOUR.',
    );

    const newDate2 = new Date();
    const dayDiff = 35;
    newDate2.setDate(newDate2.getDate() - dayDiff);
    expect(getTimeDifferenceString(newDate2.toISOString())).toBe(
      `IL Y A ${dayDiff} JOURS.`,
    );
  });
});

import { BASE_URL } from './constants';

export const buildIconPath = (
  nameIcon?: string,
  path: string = `${BASE_URL}src/assets/iconsSubCategories`,
): string => {
  return `${path}/${nameIcon ?? ''}.png`;
};

export const getRandomStarsNote = () => {
  const MAX_NOTE = 5;
  return Math.ceil(Math.random() * MAX_NOTE);
};

export const getRandomNumberReviews = () => {
  const MAX_REVIEW = 1000;
  return Math.ceil(Math.random() * MAX_REVIEW);
};

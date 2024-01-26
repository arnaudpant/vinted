import { BASE_URL } from './constants';

const buildIconPath = (
  nameIcon?: string,
  path: string = `${BASE_URL}src/assets/iconsSubCategories`,
): string => {
  return `${path}/${nameIcon ?? ''}.png`;
};

export default buildIconPath;

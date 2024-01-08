export enum SCREENS_BREAKPOINT {
  Small = 640,
  Medium = 768,
  Large = 1024,
}

const BASE_URL = `${import.meta.env.BASE_URL}`;

export const buildIconPath = (
  nameIcon?: string,
  path: string = `${BASE_URL}src/assets/iconsSubCategories`,
): string => {
  return `${path}/${nameIcon ?? ''}.png`;
};

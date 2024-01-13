// L'url de l''mage fournie par l'API https://fakeapi.platzi.com/
// n'est pas homogène
// Cette fonction permet de retourner une url valide.
// Sinon elle retourne "no-product-image.png"

export const checkURLImageProductFromApi: (
  urlImageProduct: string,
) => string = (urlImageProduct: string) => {
  const NO_IMAGE_PRODUCT_PATH: string = '/src/assets/no-product-image.png';
  const validUrlImageFormat: RegExp = /https:\/\/[^\s"]+\.png/gi;
  const match = urlImageProduct.match(validUrlImageFormat);
  const CASE_FIRST_CHARACTER_IS_BRACKET: string = '[';

  if (!urlImageProduct.startsWith(CASE_FIRST_CHARACTER_IS_BRACKET)) {
    return urlImageProduct;
  }
  return match ? match[0] : NO_IMAGE_PRODUCT_PATH;
};

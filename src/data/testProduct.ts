import { FakeProduct } from '@/types/types';

const testProduct: FakeProduct = {
  id: 40,
  title: 'Futuristic Silver and Gold High-Top Sneaker',
  price: 68,
  description:
    'Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!',
  images: [
    'https://i.imgur.com/npLfCGq.jpeg',
    'https://i.imgur.com/vYim3gj.jpeg',
    'https://i.imgur.com/HxuHwBO.jpeg',
  ],
  creationAt: '2024-01-19T16:46:48.000Z',
  category: {
    id: 4,
    name: 'Shoes',
    image: 'https://i.imgur.com/qNOjJje.jpeg',
  },
};

export default testProduct;

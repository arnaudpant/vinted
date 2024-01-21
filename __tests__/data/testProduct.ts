import { FakeProduct } from '@/types/types';

const testProduct: FakeProduct = {
  id: 40,
  title: 'My title',
  price: 68,
  description: 'Product description',
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

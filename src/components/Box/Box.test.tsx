import { render } from '@testing-library/react';
import Box from './Box';
import { describe, expect, test } from 'vitest';

describe('Box component', () => {
  test('should render Box component', () => {
    const { container } = render(<Box images={['test']} />);
    expect(container.firstChild).toBeInTheDocument();
  });


  test('Box should not have 5 div children', () => {
    const { container } = render(<Box images={['1','2','3','4','5']} />);
    if (container.firstChild) {
      const divChildren = (container.firstChild as Element).querySelectorAll('div');
      expect(divChildren.length).toBe(5);
    }
  });

});

import {render,} from '@testing-library/react';
import Box  from './Box';
import {describe, expect, test} from 'vitest';

describe("Box component", () => {
    test("should render Box component", () => {
        const { container } = render(<Box />);
        expect(container.firstChild).toBeInTheDocument();
    })
})
import Listing from '../listing';
import React from 'react';
import { render } from '@testing-library/react';

describe('Listing component', () => {
  it('renders the title', () => {
    const titleTxt = 'THIS IS THE TITLE';
    const { getByText } = render(<Listing title={titleTxt} />);

    const title = getByText(titleTxt);
    expect(title).toBeInTheDocument();
  });

  test.todo('renders a list of Properties');
});

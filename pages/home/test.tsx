import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

import { mockedProducts } from '../../utils/mocks';

test('displays the list of products', async () => {
  const { render } = await getPage({ route: '/' });

  await render();

  mockedProducts.forEach(async ({ strain, strain_type }) => {
    expect(await screen.findByTitle(strain)).toBeInTheDocument();
    expect(await screen.findByTitle(strain_type)).toBeInTheDocument();
  });
});
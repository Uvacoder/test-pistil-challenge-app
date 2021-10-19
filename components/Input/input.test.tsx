import { renderTheme } from '../../utils/helpers/renderTheme';

import { Input } from '.';

describe('Input', () => {
  it('Should render placeholder attribute', async () => {
    
    const { getByPlaceholderText } = renderTheme(
      <Input placeholder="Filter by strain" />
    );

    expect(await getByPlaceholderText('Filter by strain')).toBeInTheDocument();
  });
});

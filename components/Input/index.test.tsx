import { renderTheme } from '../../utils/helpers/renderTheme';

import { Input } from '.';

describe('Input', () => {
  it('Should render placeholder attribute', () => {
    const { getByPlaceholderText } = renderTheme(
      <Input placeholder="Filter by strain" />
    );

    expect(getByPlaceholderText('Filter by strain')).toBeInTheDocument();
  });
});

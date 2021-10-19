import { renderTheme } from '../../utils/helpers/renderTheme';

import { Header } from '.';

describe('Header', () => {
  it('Should render header with alt attribute', async () => {
    
    const { getByAltText } = renderTheme(
      <Header />
    );

    expect(await getByAltText('Pistil Data')).toBeInTheDocument();
  });
});

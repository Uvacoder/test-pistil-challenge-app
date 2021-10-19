import { renderTheme } from '../../utils/helpers/renderTheme';

import { Card } from '.';

describe('Card', () => {
  it('Should render placeholder attribute', async () => {
    
    const { getByAltText } = renderTheme(
      <Card 
        strain="OG Kush"
        strainType="Indica"
        category="flower"
        placeholderImage="https://source.unsplash.com/random/800x600"
      />
    );

    expect(await getByAltText('OG Kush')).toBeInTheDocument();
  });
});

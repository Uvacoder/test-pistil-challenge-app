import { renderTheme } from '../../utils/helpers/renderTheme';

import { Button } from '.';

describe('Button', () => {
    it('Should render', async () => {

    const { getByText } = renderTheme(
        <Button>
            OK
        </Button>
    );

    expect(await getByText('OK')).toBeInTheDocument();
    });
});

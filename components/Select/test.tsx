import { renderTheme } from '../../utils/helpers/renderTheme';

import { Select } from '.';

describe('Select', () => {
    it('Should render', async () => {

        const { getByTestId } = renderTheme(
            <Select>
                <option value="sativa">Select</option>
                <option value="sativa">Indica</option>
                <option value="sativa">Sativa</option>
            </Select>
        );

        expect(getByTestId('select').querySelectorAll('option').length).toEqual(3);
    });
});

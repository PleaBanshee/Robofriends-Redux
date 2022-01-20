// Snapshotting can be used to compare testing values to exact object values
import { shallow } from 'enzyme';
import Card from './Card';

// Shallow rendering renders only the component referenced
it('Card component must render', () => {
    expect.assertions(1);
    expect(shallow(<Card/>)).toMatchSnapshot();
});
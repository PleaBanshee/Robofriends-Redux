import { shallow, mount, render } from 'enzyme';
import Card from './Card';

expect.assertions(1);
// Shallow rendering renders only the component referenced
it('Card component must render', () => {
    expect(shallow(<Card/>).length).toEqual(1); // actually renders
});
import { shallow } from 'enzyme';
import CardList from './CardList';

expect.assertions(1);

it('CardList component must render', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'GOTF@n',
            email: 'john@gmail.com'
        }

    ];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});
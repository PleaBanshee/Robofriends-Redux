import { shallow } from 'enzyme';
import CardList from './CardList';


it('CardList component must render', () => {
    expect.assertions(1);
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
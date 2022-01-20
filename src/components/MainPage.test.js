import { shallow } from 'enzyme';
import MainPage from './MainPage';
  
let wrapper;
// runs before each test
beforeEach(() => {
    expect.assertions(1);
    const mockProps = {
        onRequestRobots: jest.fn(), // mocks a function
        robots: [],
        searchField: '',
        isPending: false
    }
    // receives props from App.js
    wrapper = shallow(<MainPage {...mockProps}/>)
});

it('Renders Main Page successfully',() => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.instance().filterRobots()).toEqual([]);
});

it('Robots filtered successfully with searchterm john',() => {
    expect.assertions(1);
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    // instance(): provides access to all methods of the wrapper object
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('Robots filtered successfully with searchterm a',() => {
    expect.assertions(1);
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('Robots not filtered when the searchterm doesn\'t exist',() => {
    expect.assertions(1);
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'Llewellyn',
        isPending: false
    }
    const wrapper4 = shallow(<MainPage {...mockProps4}/>)
    expect(wrapper4.instance().filterRobots().length).toEqual(0);
});
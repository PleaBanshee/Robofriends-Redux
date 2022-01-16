import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
  
it('The counter button renders', () => {
    expect.assertions(1);
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
});

it('The counter increments by one', () => {
    expect.assertions(3);
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.find('[id="counter"]').text()).toEqual('Count: 2');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.find('[id="counter"]').text()).toEqual('Count: 3');
    expect(wrapper.props().color).toEqual('red');
});
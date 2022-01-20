// Actions are events that describe something that happened in the application.
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';

// Configuring the mockStore with middleware. Export it so it is available to all testing files
// Needs to pass dispatch via thunk middleware
export const mockStore = configureMockStore([thunkMiddleware]);

describe('Actions', () => {
    const text = 'woooo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }

    it('Should create an action to search', () => {
        expect.assertions(1);
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    // Testing an asynchronous function with dispatch
    it('Handles requesting Robots API', () => {
        expect.assertions(1);
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        expect(action[0]).toEqual(expectedAction);
    });
});
  
describe("Fetch robots action PENDING", () => {
    expect.assertions(1);
    it("Should creat a Pending action on request Robots", () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
    });
});
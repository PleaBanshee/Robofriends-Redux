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
    it("Should create a Pending action on request Robots", () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions();
        expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
    });
});

describe("Fetch robots action SUCCESS", () => {
    expect.assertions(1);

    const success = () => {
        return {
          type: REQUEST_ROBOTS_SUCCESS,
          payload: "Llewellyn Anthony"
        }
    }

    const fetchData = () => {
        return dispatch => {
          return fetch('https://jsonplaceholder.typicode.com/users') // Some async action with promise
            .then(() => dispatch(success()))
        };
    }

    it('Should create a Success action on request Robots', () => {
        const store = mockStore({})
        // Return the promise
        return store.dispatch(fetchData())
          .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual(success())
        })
    })
});

describe("Fetch robots action FAILED", () => {
    expect.assertions(1);

    const failed = () => {
        return {
          type: REQUEST_ROBOTS_FAILED,
          payload: "Something went wrong... try again"
        }
    }

    const fetchData = () => {
        return dispatch => {
          return fetch('https://jsonplaceholder.typicode.com/users')
            .then(() => dispatch(failed()))
        };
    }

    it('Should create a Fail action on request Robots', () => {
        const store = mockStore({})

        return store.dispatch(fetchData())
          .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual(failed())
        })
    })
});
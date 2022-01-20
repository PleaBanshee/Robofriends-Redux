// Reducers take the current state and an action as arguments, and return a new state result
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots Reducer',() => {
    const initialStateSearch = {
        searchField: ''
    };

    it('Should return the initial state',() => {
        expect.assertions(1);
        // empty state, no actions
        expect(reducers.searchRobots(undefined,{})).toEqual({  searchField: "" });
    });

    it('Should handle ChANGE_SEARCHFIELD event',() => {
        expect.assertions(1);
        // empty state, CHANGE_SEARCHFIELD actions
        expect(reducers.searchRobots(initialStateSearch,{
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
});

describe('requestRobots Reducer',() => {
    const initialStateRobots = {
        robots: [],
        isPending: false // false by default in reducers.js
    };

    it('Should return the initial state when compared to initialStateRobots',() => {
        expect.assertions(1);
        expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots);
    });

    it('Should return the initial state when compared to provided values',() => {
        expect.assertions(1);
        expect(reducers.requestRobots(undefined,{})).toEqual({
            robots: [],
            isPending: false
        });
    });

    it('Should handle REQUEST_ROBOTS_PENDING action', () => {
        expect.assertions(1);
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
            payload: {isPending: true}
          })).toEqual({
                robots: [],
                isPending: true
          })
    });

    it('Should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect.assertions(1);
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
              }]
          })).toEqual({
                robots: [{
                id: '123',
                name: 'test',
                email: 'j@jmail.com'
            }],
            isPending: false
          }
        )
      });

      it('Should handle REQUEST_ROBOTS_FAILED action', () => {
        expect.assertions(1);
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Something went wrong... Try again'
        })).toEqual({
            error: 'Something went wrong... Try again',
            robots: [],
            isPending: false
        })
      });
});
import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects a React component to a Redux store
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import Header from '../components/Header';
import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending // pending, success, fail
  }
}

// dispatch the DOM changes to call an action. Note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
// dispatches searches and requesting the robots
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // no constructor needed, because there is no more direct state, state is returned as props

  componentDidMount() {
    this.props.onRequestRobots(); // props returned
  }

    render() {
      const { searchField, onSearchChange, robots, isPending } = this.props; // state receives props
      const filterRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase()); // check if search value exists in robots array. Works for upper and lowercase searches
      });
      return (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            !filterRobots.length? <h1>ROBOT DOESN'T EXIST...</h1>:
              <ErrorBoundary>
                <CardList robots={filterRobots} />
              </ErrorBoundary>
          }
        </Scroll>
        </div>
      )}
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect is a HOF
import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects a React component to a Redux store
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry.js';
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
      return isPending ? // if loading
      <h1 className="tc f1">LOADING...</h1> :
      !filterRobots.length ? 
      (<div className="tc">
          <h1 className="tc f1">ROBOT DOESN'T EXIST...</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll> 
              <ErrorBoundary> 
                  <CardList robots={filterRobots}/>
              </ErrorBoundary>
          </Scroll>
      </div>) :
      <div className="tc">
          <h1 className="mb3 f1">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
              <ErrorBoundary> 
                  <CardList robots={filterRobots}/>
              </ErrorBoundary>
          </Scroll>
      </div>
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect is a HOF
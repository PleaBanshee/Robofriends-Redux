// App connects to store and handles state imports, while also rendering the MainPage Component
import React, { Component } from 'react';
import { connect } from 'react-redux'; // connects a React component to a Redux store
import { setSearchField, requestRobots } from '../actions';

import MainPage from '../components/MainPage';

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
  render() {
     return ( <MainPage {...this.props}/> );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect is a HOF
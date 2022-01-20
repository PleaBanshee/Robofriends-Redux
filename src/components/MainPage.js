// Contains all elements on the Main Page
import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary.js';
import Header from '../components/Header';

class MainPage extends Component {
  // no constructor needed, because there is no more direct state, state is returned as props
  componentDidMount() {
    this.props.onRequestRobots(); // props returned
  }

  filterRobots = () => {
      const { robots, searchField } = this.props;
      return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); // check if search value exists in robots array. Works for upper and lowercase searches
  });
  }

  render() {
    const { onSearchChange, isPending } = this.props; // state receives props
    return (
      <div className='tc'>
      <Header/>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        { isPending ? <h1>Loading</h1> :
          !this.filterRobots().length? <h1>ROBOT DOESN'T EXIST...</h1>:
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
        }
      </Scroll>
      </div>
    )}
}

export default MainPage;
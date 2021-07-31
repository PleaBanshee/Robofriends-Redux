import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='search robots' /*  define a string that labels the current element. Use where a text label is not visible on the screen */
        className='pa2 mb3 ba b--green bw2 bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
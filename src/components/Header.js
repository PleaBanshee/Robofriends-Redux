import React from 'react';
import CounterButton from '../components/CounterButton';

function Header() {
    console.log('Hello');
    return (
        <div>
            <h1 className="mb3 f1">Robofriends</h1>
            <CounterButton color={'red'}/>
        </div>
    );
}

export default React.memo(Header); // React.memo keeps a component from rerendering. Alternative for class componets is shouldComponentUpdate()
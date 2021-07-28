import React, {useState} from 'react';

function CounterButton({color}) {
    const [count,setCount] = useState(0)

    const updateCount = () => {
        setCount(count+1);
    }

    console.log({color,count});
    return <button color={color} onClick={updateCount}>Count: {count}</button>
}

// NB! React.memo keeps a component from receiving state, so don't use it on components that needs state updates
export default (CounterButton);
import React from 'react';
import { useCount } from './Count-context';

const Counter = () => {
    const { state, dispatch } = useCount();
    return (
        <div>
            <h1>Count : { state.count } </h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment the value</button>
        </div>
    )
}

export default Counter;

import React from 'react';
import { useCount } from './Count-context';

const Counterdecrement = () => {
    const {state, dispatch} = useCount();
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement the value</button>
        </div>
    )
}

export default Counterdecrement;

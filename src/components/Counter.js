/* eslint-disable no-console */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

function Counter () {
    const { counter, show } = useSelector((state) => state);
    const dispatch = useDispatch();
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };
    const incrementCounterHandler = () => {
        dispatch(counterActions.increment());
    };
    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement());
    };
    const increaseBy10Handler = () => {
        dispatch(counterActions.increase(10));
    };
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            { show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={increaseBy10Handler}>Increment by 10</button>
                <button onClick={decrementCounterHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}

export default Counter;

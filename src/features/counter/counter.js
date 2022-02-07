import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {decrement, increment, incrementByAmount} from "./counterSlice";

function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] =useState('')

    return (
        <div>
            <div className={'btn'}>
                <input
                    value = {incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() =>dispatch(incrementByAmount(Number(incrementAmount)||0 ))}
                    >
                    Add Amount
                </button>
                <button
                    aria-label="Increment value"
                    onClick={()=> dispatch(increment())}
                    >
                    Increment
                    </button>
                <span>{count}</span>
                <button
                    aria-label={"Decrement value"}
                    onClick={()=> dispatch(decrement())}
                    >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;
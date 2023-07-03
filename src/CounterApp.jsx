import { useState } from "react";

export const CounterApp = ({value}) => {

    const [count, setCount] = useState(value);

    const countIncrement = () =>{
        setCount(count + 1);
    }

    return <>
    <h2>El valor del contador es { count }</h2>
    <button onClick={ countIncrement }>Incrementar contador +1 </button>
    </>
}
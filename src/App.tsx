import React, { useState } from "react";


function App() {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount<number>(count + 1)
    const decreaseCount = () => setCount<number>(count - 1)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increaseCount}>
                Add one Number
            </button>
            <button onClick={decreaseCount}>
                Remove one Number
            </button>
        </div>
    );
}
export default App;

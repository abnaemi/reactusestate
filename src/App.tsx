import React, { useState } from "react";


function App() {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
            </div>
            <div>
                <button onClick={increaseCount}>Add one Number</button>
                <button onClick={decreaseCount}>Remove one Number</button>
            </div>
        </div>
    );
}

export default App;
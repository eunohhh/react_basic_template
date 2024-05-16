import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleCounterClick = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <p>카운터 맛 좀 볼래?</p>
            <p>{counter}</p>
            <button onClick={handleCounterClick}>한번 눌러보시지</button>
        </div>
    );
}

export default Counter;

// import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoContainer from "./components/TodoContainer";

// 1 vite 설치
// 2 initial 값들 삭제 app, css 등
// 3 컴포넌트 만들기 - 먼저 앱에 만들고 옮기는 것 보여주기
//   - Counter (원시타입 데이터 변경)
//   - ToDoContainer (투두 메인 / 배열, 객체 state 만들어보기)
//   - Card (css 깔짝 해서 일딴 띄우기)
//   - Form (onChange, 내부 스테이트 체인지 핸들러)
// 4 Props 전달 연습 (addToDo, delToDo, toggleToDo)

function App() {
    return (
        <>
            <Counter />
            <TodoContainer />
        </>
    );
}

export default App;

// function Counter() {
//     const [counter, setCounter] = useState(0);

//     const handleCounterClick = () => {
//         setCounter(counter + 1);
//     };

//     return (
//         <div>
//             <p>카운터 맛 좀 볼래?</p>
//             <p>{counter}</p>
//             <button onClick={handleCounterClick}>한번 눌러보시지</button>
//         </div>
//     );
// }

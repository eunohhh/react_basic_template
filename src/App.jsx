// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import TodoContainer from "./components/TodoContainer";
import {
    addStudent,
    decrement,
    delStudent,
    increment,
} from "./redux/slice/counter.slice";

// 1 vite 설치
// 2 initial 값들 삭제 app, css 등
// 3 컴포넌트 만들기 - 먼저 앱에 만들고 옮기는 것 보여주기
//   - Counter (원시타입 데이터 변경)
//   - ToDoContainer (투두 메인 / 배열, 객체 state 만들어보기)
//   - Card (css 깔짝 해서 일딴 띄우기)
//   - Form (onChange, 내부 스테이트 체인지 핸들러)
// 4 Props 전달 연습 (addToDo, delToDo, toggleToDo)

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.count);
    const students = useSelector((state) => state.counter.students);

    const handleIncrementClick = () => {
        // 우체부 소환
        // 액션크리에이터 줄여서 액션
        // 우편물 => 페이로드
        dispatch(increment(6));
    };

    const handleDecrementClick = () => {
        dispatch(decrement(5));
    };

    const handleAddStudent = () => {
        dispatch(addStudent("choi"));
    };

    const handleDelStudent = () => {
        dispatch(delStudent("oh"));
    };

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    useEffect(() => {
        console.log(students);
    }, [students]);

    return (
        <>
            <button onClick={handleIncrementClick}>증가</button>
            <button onClick={handleDecrementClick}>감소</button>
            <button onClick={handleAddStudent}>학생추가</button>
            <button onClick={handleDelStudent}>학생삭제</button>

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

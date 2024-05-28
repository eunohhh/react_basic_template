import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import "./TodoContainer.css";

const initialValue = [
    {
        id: 1,
        title: "잠자기",
        contents: "잠을 잘 자자",
        isDone: false,
    },
    {
        id: 2,
        title: "이빨닦기",
        contents: "이를 잘 닦자",
        isDone: false,
    },
    {
        id: 3,
        title: "공부",
        contents: "오늘 공부 끝~~!",
        isDone: true,
    },
];

function TodoContainer() {
    const [toDos, setToDos] = useState(initialValue);

    // 1 처음 테스트 함수
    const handleClick = () => {
        const testValue = {
            id: 1,
            title: "테스트",
            contents: "테스트다",
            isDone: false,
        };
        // setToDos(testValue);

        const immutableCopy = [...toDos, testValue];

        // 여기까지 했다면 누를 때마다 계속 추가되는 것을 볼 수 있음
        setToDos(immutableCopy);
    };

    // console.log(toDos);

    // 투두 추가 함수
    const addToDo = (newTodo) => {
        setToDos([...toDos, newTodo]);
    };

    // 투두 삭제 함수 : 여기는 파라미터로 id 를 받는게 좋겠죠 아무래도?
    const delToDo = (toDoId) => {
        // 아이디가 일치하지 않는 애들만 걸러서 뱉어내라 - 왜냐하면 일치하는 애는 삭제 시킬 거니까
        const filtered = toDos.filter((toDo) => {
            return toDo.id !== toDoId;
        });
        setToDos(filtered);
    };

    // 투두 상태 토글 함수
    const toggleToDo = (toDoId) => {
        const mapped = toDos.map((toDo) => {
            const toggled = {
                ...toDo,
                isDone: !toDo.isDone,
            };
            if (toDo.id === toDoId) {
                return toggled;
            } else {
                return toDo;
            }
        });
        setToDos(mapped);
    };

    const workingToDos = toDos.filter((todo) => todo.isDone === false);
    const doneToDos = toDos.filter((todo) => todo.isDone === true);

    return (
        <>
            <div>
                <p>TodoContainer</p>
            </div>

            <div>
                <button onClick={handleClick}>이것도 눌러봐</button>
            </div>

            <Form addToDo={addToDo} />

            <h3>working...</h3>
            <div className="todoArea">
                {workingToDos.map((toDo, idx) => {
                    return (
                        <Card
                            key={idx}
                            toDo={toDo}
                            delToDo={delToDo}
                            toggleToDo={toggleToDo}
                        />
                    );
                })}
            </div>

            <h3>Done...</h3>
            <div className="todoArea">
                {doneToDos.map((toDo, idx) => {
                    return (
                        <Card
                            key={idx}
                            toDo={toDo}
                            delToDo={delToDo}
                            toggleToDo={toggleToDo}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default TodoContainer;

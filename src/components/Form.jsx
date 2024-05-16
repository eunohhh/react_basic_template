import { useState } from "react";
import "./Form.css";

// eslint-disable-next-line react/prop-types
function Form({ addToDo }) {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const handleTitleChange = (e) => {
        // console.log(e.target.value);
        const input = e.target.value;
        setTitle(input);
    };

    const handleContentsChange = (e) => {
        const input = e.target.value;
        setContents(input);
    };

    // console.log(title, contents);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기서 submit ???????
        // 여기서 form 에 제출된 값을, toDos 배열에 추가해야함!
        const newTodo = {
            id: Date.now(),
            title: title,
            contents: contents,
            isDone: false,
        };
        addToDo(newTodo);
    };

    return (
        <form className="myForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">제목</label>
                <input
                    name="title"
                    type="text"
                    onChange={handleTitleChange}
                ></input>
                <label htmlFor="contents">내용</label>
                <input
                    name="contents"
                    type="text"
                    onChange={handleContentsChange}
                ></input>
            </div>
            <button>제출하기</button>
        </form>
    );
}

export default Form;

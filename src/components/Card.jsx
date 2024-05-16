/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ toDo, delToDo, toggleToDo }) {
    const handleToggleClick = () => {
        toggleToDo(toDo.id);
    };

    const handleDeleteClick = () => {
        delToDo(toDo.id);
    };

    return (
        <div className="card">
            {/* <h2>카드다~~~</h2> */}
            <h3>{toDo.title}</h3>
            <h4>{toDo.contents}</h4>
            <div>
                <button onClick={handleToggleClick}>완료</button>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    );
}

export default Card;

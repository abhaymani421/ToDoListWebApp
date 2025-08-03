function ToDoItem({ id, text, checked, checkItem }) {
    return (
        <div>
            <input type="checkbox" id={id} onChange={(e) => checkItem(id, e.target.checked)} checked={checked}/>
            <label htmlFor={id}>{text}</label>
        </div>
    );
}

export default ToDoItem;

function ToDoItem({ id, text, checked, checkItem, deleteItem }) {
    return (
        <div>
            <input type="checkbox" id={id} onChange={(e) => checkItem(id, e.target.checked)} checked={checked}/>
            <label htmlFor={id} className="todoTextLabel">{text}</label>
            <button onClick={() => deleteItem(id)} className="deleteBtn">Delete</button>
        </div>
    );
}

export default ToDoItem;

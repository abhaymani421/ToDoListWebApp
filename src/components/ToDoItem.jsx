import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem({ id, text, checked, checkItem, deleteItem }) {
    return (
        <div className="todoItem">
            <div className="checkboxWrapper">
                <input type="checkbox" id={id} onChange={(e) => checkItem(id, e.target.checked)} checked={checked}/>
                <label htmlFor={id}>{text}</label>
            </div>
            
            <button onClick={() => deleteItem(id)} className="deleteBtn"><DeleteIcon className='deleteIcon'/></button>
        </div>
    );
}

export default ToDoItem;

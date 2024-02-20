const TodoItem = ( { todo = {done: true, title: 'Buy Milk', status: 'COMPLETED'} }) => {
    return (
        // make it a checkbox
        <li className="list-group-item">
            <input type='checkbox' className="me-2" defaultChecked={todo.done} />
            {todo.title} ({todo.status})
        </li>
    );
}

export default TodoItem;

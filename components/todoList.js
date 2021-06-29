import {useSelector} from 'react-redux';
import TodoItem from './todoItem';
import styles from './todoList.module.css';

export default function TodoList() {
    const todos = useSelector(state => state.todo);
    return (
        <main className={styles.container}>
            <ul className={styles.list}>
                {todos && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        </main>
        
    )
}
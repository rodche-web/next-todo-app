import styles from './todoItem.module.css';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/todoSlice';

export default function TodoItem({todo}) {
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <h3>{todo.name}</h3>
            <button className={styles.delete} onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
        </li>
    )
}
import {useRef} from 'react';
import {addTodo} from '../redux/todoSlice';
import {useDispatch} from 'react-redux';
import styles from './todoForm.module.css';

export default function TodoForm() {
    const todoRef = useRef();
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(addTodo(todoRef.current.value));
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <input type='text' ref={todoRef} />
            <button>Add Todo</button>
        </form>
    )
}
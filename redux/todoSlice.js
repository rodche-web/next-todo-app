import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todoItem = {
                id: Math.floor(Math.random()* 100000),
                name: action.payload
            }
            state.push(todoItem)
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
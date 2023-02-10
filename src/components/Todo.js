import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo, RemoveTodo } from '../actions/index';
import "./todo.css";

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder='Add Item..' value={inputData} onClick={(e) => setInputData(e.target.value)} />
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>

                    </div>

                    <div className='showItem'>

                        {
                            list.map((item) => {
                                return (
                                    <div className='eachItem' key={item.id}>
                                        <h3>{item.data}</h3>
                                        <div className='todo-btn'>
                                            <i className='far fa-trash-alt add-btn' title="Delete Item" onClick={() => dispatch(deleteTodo(item.id))}></i>
                                        </div>
                                    </div>

                                )
                            }
                            )}

                    </div>
                    
                    <div className='showItem'>
                        <button className='btn effect04' data-sm-link-text="removel-All" onClick={() => dispatch(removeTodo())}><span>CHECK LIST</span></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Todo
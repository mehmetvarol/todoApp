import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleCompleteAsync } from '../../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};

	return (
		<li className='list-item'>
			<div className='list-wrapper'>
				<span className={completed ? "through" : ""}>
					<input
						type='checkbox'
						id='todo'
						className='list-checkbox'
						checked={completed}
						onChange={handleCheckboxClick}
					></input>
					<label for='todo'>{title}</label>
				</span>
				<button onClick={handleDeleteClick} className='delete'>
					<FaTrashAlt color='red' size={20} />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;

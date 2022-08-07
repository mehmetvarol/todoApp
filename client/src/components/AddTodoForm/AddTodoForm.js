import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../redux/todoSlice';
import './index.scss';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodoAsync({
					title: value,
				})
			);
		}
		setValue("")
	};

	return (
		<form onSubmit={onSubmit} className='add-todo'>
			<input
				type='text'
				className='add-todo__input'
				placeholder='Yeni todo ekle...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
			<button type='submit' className='add-todo__submit'>
				Ekle
			</button>
		</form>
	);
};

export default AddTodoForm;

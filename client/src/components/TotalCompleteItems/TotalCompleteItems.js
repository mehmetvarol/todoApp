import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

const TotalCompleteItems = () => {
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	return <h4 className='total-complete'>Toplam tamamlanan todo: {todos.length}</h4>;
};

export default TotalCompleteItems;

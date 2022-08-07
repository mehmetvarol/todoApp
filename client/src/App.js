import './App.scss';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems/TotalCompleteItems';
import './reset.css';
function App() {
  return (
    <div className="main">
      <div className='container'>
        <h1>Kafein ToDo List</h1>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
}

export default App;

import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { FilterBar } from './components/FilterBar';
import './App.css';

function App() {
  const {
    todos,
    filter,
    activeCount,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">📝 TODOアプリ</h1>
        <TodoInput onAdd={addTodo} />
        {todos.length > 0 ? (
          <>
            <ul className="todo-list">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
            <FilterBar
              filter={filter}
              activeCount={activeCount}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          </>
        ) : (
          <p className="empty-message">
            {filter === 'all'
              ? 'タスクがありません。上から追加してみましょう！'
              : filter === 'active'
              ? '未完了のタスクはありません 🎉'
              : '完了済みのタスクはありません'}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// 優先度に対応するラベルと色クラス
const priorityLabel: Record<string, string> = {
  high: '🔴 高',
  medium: '🟡 中',
  low: '🟢 低',
};

export function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className="check-button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? '未完了に戻す' : '完了にする'}
      >
        {todo.completed ? '✅' : '⬜'}
      </button>
      <span className="todo-text">{todo.text}</span>
      <span className={`priority-badge priority-${todo.priority}`}>
        {priorityLabel[todo.priority]}
      </span>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label="削除"
      >
        🗑️
      </button>
    </li>
  );
}

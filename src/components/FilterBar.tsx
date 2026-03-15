import type { Filter } from '../types';

interface Props {
  filter: Filter;
  activeCount: number;
  onFilterChange: (f: Filter) => void;
  onClearCompleted: () => void;
}

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
];

export function FilterBar({ filter, activeCount, onFilterChange, onClearCompleted }: Props) {
  return (
    <div className="filter-bar">
      <span className="active-count">{activeCount} 件残り</span>
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-button ${filter === f.value ? 'active' : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <button className="clear-button" onClick={onClearCompleted}>
        完了済みを削除
      </button>
    </div>
  );
}

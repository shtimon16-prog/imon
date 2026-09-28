function FilterBar({ currentFilter, onFilterChange }) {
  const filters = ['All', 'Active', 'Completed']

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? 'active' : ''}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterBar

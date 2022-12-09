// import React from 'react'

// import ListItem from './IndexNain/ListItem'

export function Footer({ onClearCompleted, itemLeftCount }) {
  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{itemLeftCount}</strong> items left
      </span>
      <button onClick={onClearCompleted} class="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

// import React from 'react'

export function ToDoList({ items, markAsCompleted }) {
  return (
    <ul class="todo-list">
      {items.map((items) => (
        <li className="">
          <div class="view">
            <input
              onCheckBox={markAsCompleted}
              class="toggle"
              type="checkbox"
            />
            <label>{items.title}</label>
            <button class="destroy" />
          </div>
          <input class="edit" />
        </li>
      ))}
    </ul>
  )
}

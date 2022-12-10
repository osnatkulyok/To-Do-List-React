// import React from 'react'

export function ToDoList({ items, markAsCompleted, removeTodo, onToggleAll }) {
  //
  function HandleDestroyButton(event) {
    event.target.parentElement.innerHTML = ''
    console.log(event.target.parentElement.innerHTML)
  }
  //
  const markAsCompleted1 = (event) => {
    console.log('heyys')

    const createCheckedAtt = document.createAttribute('checked')
    event.target.setAttributeNode(createCheckedAtt)
    console.log(event.target.target)
    console.log()

    // const createCheckedAtt = document.createAttribute('checked')
    //     item.setAttributeNode(createCheckedAtt)
    //     console.log('yay')
  }
  return (
    <ul className="todo-list">
      {items.map((items) => (
        <li className="parent">
          <div className="view">
            <input
              onClick={markAsCompleted1}
              className="toggle"
              type="checkbox"
            />
            <label className="lineTrough">{items.title}</label>
            <button className="destroy" onClick={HandleDestroyButton} />
          </div>
          <input className="edit" />
        </li>
      ))}
    </ul>
  )
}

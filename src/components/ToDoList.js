// import React from 'react'

export function ToDoList({ items, markAsCompleted, removeTodo, onToggleAll }) {
  //
  function HandleDestroyButton(event) {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.parentElement.innerText)
    // for (let item of items) {
    //   // console.log(item.title)
    //   // console.log(item.completed)
    //   if (item.title === event.target.parentElement.innerText) {
    //     console.log(item.id, item.completed)
    //     console.log(item.id, item.completed)
    //   }
    // }

    let counter = document.querySelector('strong').innerText
    counter -= 1
    document.querySelector('strong').innerText = counter
    event.target.parentElement.innerHTML = ''
  }

  const markAsCompleted1 = (event) => {
    // console.log('heyys')

    const createCheckedAtt = document.createAttribute('checked')
    event.target.setAttributeNode(createCheckedAtt)
    // console.log(event.target)
    // console.log(items.indexOf(event.target.parentElement))
    // console.log(items)
  }
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li className="parent">
          <div className="view">
            <input
              onClick={markAsCompleted1}
              className="toggle"
              type="checkbox"
            />
            <label className="lineTrough">{item.title}</label>
            <button className="destroy" onClick={HandleDestroyButton} />
          </div>
          <input className="edit" />
        </li>
      ))}
    </ul>
  )
}

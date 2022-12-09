// import React from 'react'
import { ToDoList } from './ToDoList'

export function Main({ items, onToggleAll }) {
  //
  function HandleToggleAll(event) {
    onToggleAll(event.target.checked)
    //part 2 - let's set check & uncheck view
    let inputList = document.querySelectorAll('.toggle')
    console.log(event.target.checked)
    //
    for (let item of inputList) {
      if (event.target.checked) {
        const createCheckedAtt = document.createAttribute('checked')
        item.setAttributeNode(createCheckedAtt)
        console.log('yay')
        //add line-through if the task is done
        let taskStyle = document.querySelectorAll('.lineTrough')
        console.log('here', taskStyle)
        for (let task of taskStyle) {
          task.style.color = 'green'
          task.style.textDecoration = 'line-through'
        }
        //remove line-through if the task isn't done
      } else {
        item.removeAttribute('checked')
        let taskStyle = document.querySelectorAll('.lineTrough')
        for (let task of taskStyle) {
          task.style.color = 'red'
          task.style.textDecoration = 'none'
        }

        console.log('noo')
      }
    }
  }

  return (
    <section className="main">
      <input
        className="toggle-all"
        onChange={HandleToggleAll}
        type="checkbox"
      />
      <ToDoList items={items} />
    </section>
  )
}

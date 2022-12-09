// import React from 'react'
import { ToDoList } from './ToDoList'

export function Main({ items, onToggleAll }) {
  //
  function HandleToggleAll(event) {
    onToggleAll(event.target.checked)
  }

  return (
    <section class="main">
      <input class="toggle-all" onChange={HandleToggleAll} type="checkbox" />
      <ToDoList items={items} />
    </section>
  )
}

// import React from 'react'

export function Header(props) {
  //
  function HandleTaskInput(event) {
    if (event.key === 'Enter') {
      console.log('hey')
      props.onAddItem(event.target.value)
    }
  }

  return (
    <header class="header">
      <h1>{props.title}</h1>
      <input
        className="new-todo"
        placeholder={props.text}
        onKeyUp={HandleTaskInput}
        autoFocus
      />
    </header>
  )
}

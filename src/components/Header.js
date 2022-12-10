// import React from 'react'

import { render } from '@testing-library/react'

export function Header(props) {
  //
  function HandleTaskInput(event) {
    if (event.key === 'Enter') {
      props.onAddItem(event.target.value)
      console.log(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <header className="header">
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

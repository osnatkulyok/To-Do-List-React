import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
// import { ToDoList } from './components/ToDoList '
import { render } from '@testing-library/react'

function App() {
  let [todos, setTodos] = useState([])
  let [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0)

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((response) => response.json())
    //   .then(setTodos)
  }, [])

  useEffect(() => {
    let uncompleted = todos.filter((todo) => !todo.completed)
    setNoneCompletedItemsCount(uncompleted.length)
  }, [todos])

  const appTitle = 'TodosApp'

  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false }])
    setTodos(newTodos)
    // todos = [ ...todos, { id: Date.now(), title, completed: false } ]
  }

  // const removeTodo = (todoToRemove) => {
  //   console.log('kokkk')
  //   todos = todos.filter((currentTodo) => currentTodo.id !== todoToRemove.id)
  // }

  // const markAsCompleted = () => {
  //   console.log('heyys')
  //   console.log()
  // const createCheckedAtt = document.createAttribute('checked')
  //     item.setAttributeNode(createCheckedAtt)
  //     console.log('yay')

  const clearAllCompletedItems = () => {
    const listItems = document.querySelectorAll('li')

    // console.log(todos)
    ////for i in todos
    for (let todo of todos) {
      /////for i in list 'ul'
      for (let li of listItems) {
        if (todo.completed) {
          if (todo.title === li.innerText) {
            li.innerHTML = ''
          }
        }
      }
    }
    //clear all completed tasks from todos
    todos = todos.filter((currentTodo) => !currentTodo.completed)
    // console.log(todos)
    //update left items
    document.querySelector('strong').innerText = todos.length
  }

  const toggleAllItems = (checkedValue) => {
    todos = todos.map((todo) => ({ ...todo, completed: checkedValue }))
    // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
    console.log(todos)
  }

  return (
    <section className="todoapp">
      <Header
        title={appTitle}
        onAddItem={addTodo}
        text="What needs to be done?"
      />
      <Main items={todos} onToggleAll={toggleAllItems} />
      <Footer
        itemLeftCount={noneCompletedItemsCount}
        onClearCompleted={clearAllCompletedItems}
      />
    </section>
  )
}

export default App

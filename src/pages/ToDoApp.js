import React, {useState, useRef, useEffect} from "react";
import TodoList from "../TodoList";
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

import {Container, Row, Col} from 'react-bootstrap'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function ToDoApp() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos)
    setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-3 text-center">
            <h1>TODO lista</h1>
            <div className="mt-3 mb-2 text-uppercase fs-4">
              {todos.filter((todo) => !todo.complete).length} left to do
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="grupa-main">
              <input className="mt-3" ref={todoNameRef} type="text" />
              <br />
              <button className="btn btn-primary mt-2" onClick={handleAddTodo}>Add Todo</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="grupa">
              <TodoList todos={todos} toggleTodo={toggleTodo} />
              <button
                className="btn btn-primary mt-2"
                onClick={(handleClearTodos)}
              >
                Clear completed
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
    
  );
}

export default ToDoApp;

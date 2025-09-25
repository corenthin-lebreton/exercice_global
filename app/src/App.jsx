
import './App.css'

function App() {


  return (
    <>
     
      <div class="container">
          <h1>My Todo App Prod</h1>
          <form id="todo-form">
              <input type="text" id="todo-input" placeholder="Add a new task..." autocomplete="off" />
              <button type="submit">Add</button>
          </form>
          <ul id="todo-list"></ul>
      </div>
    </>
  )
}

export default App

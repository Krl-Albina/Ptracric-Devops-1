import './App.css'

function App() {
  return (
    <div className="container">
      <h1>My React Website</h1>
      <h2>DevOps Practice</h2>
      <p>Это мой первый сайт на React</p>
      <button onClick={() => alert('Сайт работает!')}>
        Нажми меня
      </button>
    </div>
  )
}

export default App
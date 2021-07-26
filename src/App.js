
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Todo List App
      </header>
      <form>
        <input placeholder="Enter a Todo" />
        <button>Go</button>
        <ul>
          <li>
            <span>First todo</span>
            <button>Delete</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;

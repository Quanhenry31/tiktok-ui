import logo from './logo.svg';
import './App.css';
import './components/Button'
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      <Button></Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactmkomk
        </a>
      </header>
    </div>
  );
}

export default App;

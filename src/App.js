import './App.css';
import Books from './components/Books';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1> Bookstore Cms</h1>
      <NavBar />
      <Books />
    </div>
  );
}

export default App;

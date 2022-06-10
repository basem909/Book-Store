import './App.css';
import Books from './components/Books';
import NewBook from "./components/NewBook";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1> Bookstore Cms</h1>
      <NavBar />
      <Books />
      <NewBook />
    </div>
  );
}

export default App;

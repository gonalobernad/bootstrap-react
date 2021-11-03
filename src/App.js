import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Cards/>
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Navigation/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>SLO Study Sonar</h1>
      </header>
    </div>
  );
}

export default App;

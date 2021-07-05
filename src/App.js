
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>
        React app
        </h1>
        <Weather/>
      </header>
      <footer className="sourceline">
<a href="https://github.com/dajanafaris/react-weather"
target="_blank"
rel="noreferrer"
className="codeLink">Open source code </a>{" "}
built by {" "}
<a href="https://www.linkedin.com/in/dajana-faris-742673171/"
target="_blank"
rel="noreferrer"
className="codeLink">Dajana Faris </a>

      </footer>
    </div>
  );
}

export default App;

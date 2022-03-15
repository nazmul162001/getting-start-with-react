import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {Name: 'Dr Mahfuz', job: 'Singer'};

const singerStyle = {
  color: 'white',
  backgroundColor: 'green',
  padding: '2rem',
  borderRadius: '20px'
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude React</h3>
        </div>

      <div className="music">
        <p style={{color:'black', backgroundColor: 'white', padding: '2rem', borderRadius: '20px'}}>Name: {2222 + number}</p>
        <p style={singerStyle}>Name: {singer.Name} Job: {singer.job} </p>
      </div>




        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

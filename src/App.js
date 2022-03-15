import logo from './logo.svg';
import './App.css';

// const number = 5555;
// const singer = {Name: 'Dr Mahfuz', job: 'Singer'};

// const singerStyle = {
//   color: 'white',
//   backgroundColor: 'green',
//   padding: '2rem',
//   borderRadius: '20px'
// }



function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  )
}

function Person () {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1>
      <p>Location: Bangladesh</p>
    </div>
  )
}

export default App;

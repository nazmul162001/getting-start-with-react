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
      <Person name="Rubel" nayeka = "Mousumi"></Person>
      <Person name = "Bapparaj" nayeka = "cheka"></Person>
      <Person name = "Akash" job = "Web Developement" salary = "2000"></Person>

      <h2>New Components</h2>
      <Friend name = "Nazmul" skill = "Web Developement" salary = "25000"></Friend>
      <Friend name = "Akash Mahmud" skill = "React" salary = "30000"></Friend>

    </div>
  )
}

function Person (props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayeka: {props.nayeka}</p>
      <p>Job: {props.job}</p>
      <p>Salary: {props.salary}</p>
    </div>
  )
}

function Friend(props){
  return(
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>Skill: {props.skill}</p>
      <p>Salary: {props.salary}</p>

    </div>
  )
}

export default App;

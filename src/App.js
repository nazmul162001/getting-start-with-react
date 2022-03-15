import logo from './logo.svg';
import './App.css';

// const number = 5555;
const singers = [
  {Name: 'Dr Mahfuz', job: 'Singer2'},
  {Name: 'Dr Mahfuz3', job: 'Singer3'},
  {Name: 'Dr Mahfuz4', job: 'Singer4'},
  {Name: 'Dr Mahfuz5', job: 'Singer5'}
];

// const singerStyle = {
//   color: 'white',
//   backgroundColor: 'green',
//   padding: '2rem',
//   borderRadius: '20px'
// }



function App() {
  const nayoks = ['Rebel', 'BappaRaz', 'Kuber', 'Jashim'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li> Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => {<Person name = {nayok}></Person>})
      } */}

      {
        singers.map(singer => <Person name = {singer.Name}></Person>)
      }

      
      <Person name = "Rubel"></Person>
      <Person name = "akash"></Person>
      <Person name = "Nazmul"></Person>

      <h2>New Components</h2>
     {/* <Friend name = "Nazmul" skill = "Web Developement" salary = "25000"></Friend>
      <Friend name = "Akash Mahmud" skill = "React" salary = "30000"></Friend> */}

    </div>
  )
}

function Person (props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayeka}</p>
    </div>
  )
}

// function Friend(props){
//   return(
//     <div className='container'>
//       <h3>Name: {props.name}</h3>
//       <p>Skill: {props.skill}</p>
//       <p>Salary: {props.salary}</p>

//     </div>
//   )
// }

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';

function App() {

  const [ users,setUsers]= useState([]);
  const [loading, setLoading]= useState(true);

 useEffect(() => {
 const getUsers=()=>{
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then(data=>setUsers(data)).catch((err)=>console.log(err));
 };
 
  getUsers()
 setLoading(false)
 

  
 }, [])
 console.log(users);
  return (
    <div className="App">
      {loading? (
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      ):(
     <div>
      {users.map((el)=>(
        <div key={el.id} style={{border:"solid black 2px"}}>
          <h1>{el.name}</h1>
          <p>{el.email}</p>
          <p>{el.adress.street}</p>
        </div>
      ))}
     </div> )}
    </div>
  );
}

export default App;

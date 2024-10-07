import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from "react";
function App() {
  const[myData,setMyData]=useState([]);
  const[error,setError]=useState();
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>
        setMyData(res.data)
      ).catch((error)=>setError(error.message));
  },[]);
  return (
    <>
     {error!==""&&<h2>{error}</h2>}
    <div className="App">
      {
        
        myData.map((post)=>{
          // <li key={post.id}>{post.title}</li>
        let {id,title,completed}=post;
        return( 
        
        <div className='card' key={id}>
          <h2>{title.slice(0,15).toUpperCase()}</h2>
          <p>{completed}</p>
        </div>
        
        );
})
      }
    </div>
    </>
  );
  
}

export default App;

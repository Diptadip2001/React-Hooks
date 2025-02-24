import React,{useEffect,useState} from 'react';

interface todoitem{
  completed:boolean
  id:number
  title:string
  userId:number
}
function App() {
  const[todos,setTodos]=useState<todoitem[]>([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response)
    .then((e)=>e.json())
    .then((e)=>setTodos(e as todoitem[]));
  },[]);
  return (
    
    <div className="App">
      {
        todos.map(todo=><li key={todo.id}>{todo.title}</li>)
      }
    </div>
  );
}

export default App;

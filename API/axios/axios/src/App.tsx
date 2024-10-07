import React, { useEffect ,useState} from 'react';
import axios from 'axios';

interface todoitem{
  completed:boolean
  id:number
  title:string
  userId:number
}
function App() {
  const[todos,setTodos]=useState<todoitem[]>([]);
  useEffect(()=>{
    axios.get<todoitem[]>('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>setTodos(response.data));
  },[])
  return (
    <div className="App">
      {
        todos.map(todo=><li key={todo.id}>{todo.title}</li>)
      }
    </div>
  );
}

export default App;

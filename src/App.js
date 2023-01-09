import './App.css';
import Parent from './component/Parent';
import { useSelector } from 'react-redux';


function App() {
  const data =useSelector((c)=>{
    return c.show.value
})
  return (
    <div className="App">
      <h1>Increment in App {data}</h1>
      
      <Parent/>
    
    </div>
  );
}

export default App;

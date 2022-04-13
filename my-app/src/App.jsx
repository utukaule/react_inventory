import './App.css';
import { Book } from './components/book';
import { Noot } from './components/nootbooks';
import { Pens } from './components/pens';

function App() {

  const getValue = (value)=>{
    console.log(value); 
  }
  // const [pens,penCount] = useState(22);
  // const [noteBook,noteBookCount] = useState(12);

  


  return (
    <div className="App">
     <Book  fun ={getValue} />
     
    <Pens  />
    <Noot />
    <h1>{}</h1>
     </div>
     
  );
}


export default App;

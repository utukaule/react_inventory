import './App.css';
import { Book } from './components/book';
import { Noot } from './components/nootbooks';
import { Pens } from './components/pens';
import { Total } from './components/total';


function App() {

  // const [pens,penCount] = useState(22);
  // const [noteBook,noteBookCount] = useState(12);

  


  return (
    <div className="App">
     
     
    <Book />
    <Pens  />
    <Noot />
    
     

     
    </div>
  );
}

export default App;

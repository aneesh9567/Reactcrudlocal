import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Add/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

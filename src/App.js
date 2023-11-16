import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CombainedComponents from './components/CombainedComponents';
import IndividualProjects from './components/Projects/Alone';



function App() {
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element=<CombainedComponents /> />
        <Route path='/projects' element=<IndividualProjects/> />
      </Routes>
    </>
  </BrowserRouter>
    
  )
}

export default App;

import {Route, Routes} from 'react-router-dom';
import './App.css';
import Samorezi from './components/Samorezi/Samorezi';
import Others from './components/Others/Others';
import Podarok from './components/Podarok/Podarok';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Component1/>}/>
          <Route path="component2/*" element={<Component2/>}/>    
          <Route path="samorezi/*" element={<Samorezi/>}/>
          <Route path="others/*" element={<Others/>}/>
          <Route path="podarok/*" element={<Podarok/>}/>
        </Routes>
    </div>
  );
}

export default App;

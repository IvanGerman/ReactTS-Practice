import {Route, Routes} from 'react-router-dom';
import './App.css';

import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Component3 from './components/Component3/Component3';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Component1/>}/>
          <Route path="component2/*" element={<Component2/>}/>    
          <Route path="component3/*" element={<Component3/>}/>
        </Routes>
    </div>
  );
}

export default App;

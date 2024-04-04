import {Route, Routes} from 'react-router-dom';
import './App.css';

import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Component3 from './components/Component3/Component3';
import Component4 from './components/Component4/Component4';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Component1/>}/>
          <Route path="component2/*" element={<Component2/>}/>    
          <Route path="component3/*" element={<Component3/>}/>
          <Route path="component4/*" element={<Component4/>}/>
        </Routes>
    </div>
  );
}

export default App;

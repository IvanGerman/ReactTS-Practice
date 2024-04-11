import {Route, Routes} from 'react-router-dom';
import './App.css';

import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import Component3 from './components/Component3/Component3';
import Component4 from './components/Component4/Component4';
import Component5 from './components/Component5/Component5';
import Component6 from './components/Component6/Component6';
import Component7 from './components/Component7/Component7';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Component1/>}/>
          <Route path="component2/*" element={<Component2/>}/>    
          <Route path="component3/*" element={<Component3/>}/>
          <Route path="component4/*" element={<Component4/>}/>
          <Route path="component5/*" element={<Component5/>}/>
          <Route path="component6/*" element={<Component6/>}/>
          <Route path="component7/*" element={<Component7/>}/>
        </Routes>
    </div>
  );
}

export default App;

import {Route, Routes} from 'react-router-dom';
import './App.css';
import Startpage from './components/Startpage/Startpage';
import Ugolki from './components/Ugolki/Ugolki';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Startpage/>}/>
          <Route path="ugolki/*" element={<Ugolki/>}/>
          
          {/* <Route path="samorezi/*" element={<StatsPageContainer/>}/>
          <Route path="others/*" element={<FormikPageContainer/>}/> */}
        </Routes>
      <header className="App-header">
        
        {/* <Startpage/> */}
        
      </header>
    </div>
  );
}

export default App;

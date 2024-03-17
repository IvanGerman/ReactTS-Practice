import {Route, Routes} from 'react-router-dom';
import './App.css';
import Startpage from './components/Startpage/Startpage';
import Ugolki from './components/Ugolki/Ugolki';
import Samorezi from './components/Samorezi/Samorezi';
import Others from './components/Others/Others';
import Podarok from './components/Podarok/Podarok';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Startpage/>}/>
          <Route path="ugolki/*" element={<Ugolki/>}/>    
          <Route path="samorezi/*" element={<Samorezi/>}/>
          <Route path="others/*" element={<Others/>}/>
          <Route path="podarok/*" element={<Podarok/>}/>
        </Routes>
    </div>
  );
}

export default App;

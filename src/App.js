
import './App.css';
import SideBar from './components/side-bar/side-bar.component';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard.component';
import Settings from './pages/settings/settings.component';
import Zones from './pages/zones/zones.component';

function App() {
  return (
    <div className='flex'> 
      <BrowserRouter>
        <div>
          <SideBar/>
        </div>
        <div className='flex-1'>
          <Routes >
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/zones' element={<Zones/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;

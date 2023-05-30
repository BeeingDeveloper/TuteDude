import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import './utils/style.css'
import ReferPage from './pages/ReferPage';
import EnrolledPage from './pages/EnrolledPage';
import Assignment from './pages/Assignment';
import Chatpage from './pages/Chatpage';



function App() {
  return (
    <div className=" page-bg font-semibold">
      <Navbar />
      <Routes>
        <Route path='/' element={<ReferPage />} />
        <Route path='/enrolled' element={<EnrolledPage />} />
        <Route path='/assignment' element={<Assignment />} />
        <Route path='/chat' element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;

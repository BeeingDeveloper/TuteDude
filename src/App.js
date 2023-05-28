import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import './utils/style.css'
import ReferPage from './pages/ReferPage';
import EnrolledPage from './pages/EnrolledPage';



function App() {
  return (
    <div className=" page-bg font-semibold">
      <Navbar />
      <Routes>
        <Route path='/' element={<ReferPage />} />
        <Route path='/enrolled' element={<EnrolledPage />} />
      </Routes>
    </div>
  );
}

export default App;

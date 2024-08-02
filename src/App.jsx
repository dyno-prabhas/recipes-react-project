import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Favorites from './pages/favorites';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div >
      <div className='min-h-screen p-6 text-gray-600 text-lg'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/recipe-item/:id' element={<Details />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

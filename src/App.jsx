import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Verify from '@/pages/Register/Verify';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<Verify />} />
    </Routes>
  );
}

export default App;

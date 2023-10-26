import 'rsuite/dist/rsuite.min.css';
import './assets/styles/custom.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loading from './components/Loading';
import Register from './pages/Register';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;

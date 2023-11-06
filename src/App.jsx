import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Verify from '@/pages/Register/Verify';
import CustomerInfo from "@/pages/Register/CustomerInfo";
import Login from "@/pages/Login";
import Service from '@/pages/Service';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<Verify />} />
      <Route path='/register/info' element={<CustomerInfo />} />
      <Route path='/login' element={<Login />} />
      <Route path='/service' element={<Service />} />
    </Routes>
  );
}

export default App;

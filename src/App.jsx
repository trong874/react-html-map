import { Routes, Route } from 'react-router-dom';
import User from '@/pages/User';
import Register from '@/pages/Register';
import Verify from '@/pages/Register/Verify';
import CustomerInfo from "@/pages/Register/CustomerInfo";
import Login from "@/pages/Login";
import Service from '@/pages/Service';
import Home from '@/pages/Home';
function App() {
  return (
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<Verify />} />
      <Route path='/register/info' element={<CustomerInfo />} />
      <Route path='/login' element={<Login />} />
      <Route path='/service' element={<Service />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;

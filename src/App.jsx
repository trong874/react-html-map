import { Routes, Route } from 'react-router-dom';
import User from '@/pages/User';
import Register from '@/pages/Register';
import Verify from '@/pages/Register/Verify';
import CustomerInfo from "@/pages/Register/CustomerInfo";
import Login from "@/pages/Login";
import Service from '@/pages/Service';
import Home from '@/pages/Home';
import Drive from '@/pages/Drive';
import Search from '@/pages/Search';
import Setting from '@/pages/Setting';
import Guide from '@/pages/Guide';
import InfoUser from "@/pages/InfoUser";
import PhoneModify from "@/pages/PhoneModify";
import About from "@/pages/About";
import Notice from "@/pages/Notice";
import Faq from "@/pages/Faq";
import History from "@/pages/History";
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
      <Route path='/drive' element={<Drive />} />
      <Route path='/search' element={<Search />} />
      <Route path='/setting' element={<Setting />} />
      <Route path='/guide' element={<Guide />} />
      <Route path='/info-modify' element={<InfoUser />} />
      <Route path='/phone-modify' element={<PhoneModify />} />
      <Route path='/about' element={<About />} />
      <Route path='/notice' element={<Notice />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/history' element={<History />} />
    </Routes>
  );
}

export default App;

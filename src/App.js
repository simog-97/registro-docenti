import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from './app_routes/NotFound';
import Home from './app_routes/Home';
import Navbar from './utility_components/Navbar';
import ProfLogin from './app_routes/ProfLogin';
// import StudentLogin from './app_routes/StudentLogin';
import LogOutProcedure from './app_routes/LogOutProcedure';
import Cookies from 'js-cookie';
import { useState } from 'react';
import RegisterDetails from './app_routes/RegisterDetails';
import AddActivity from './app_routes/AddActivity';
import UpdateActivity from './app_routes/UpdateActivity';
import AddRegister from './app_routes/AddRegister';
import Footer from './utility_components/Footer';



function App() {
  
  const [isLogged, setIsLogged] = useState(false)
  const setLoggedIn = () => {
    setIsLogged(true)
  }
  const setLoggedOut = () => {
    setIsLogged(false)
    Cookies.set('token', '')
    Cookies.set('tokenId', '')
    Cookies.set('userId', '')
    Cookies.set('role', 'guest')
  }

  const logOps = {'logCheck':isLogged, 'logIn':setLoggedIn, 'logOut':setLoggedOut}

  let ruolo = Cookies.get('role')
  if(ruolo !== 'professor' && ruolo !== 'student')
    Cookies.set('role', 'guest')
  
  

  return(
  <div>
  <BrowserRouter>
  <Navbar logOps= {logOps}></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prof-login" element={<ProfLogin logOps= {logOps}/>} />
      <Route path="/logout-procedure" element={<LogOutProcedure  logOps= {logOps}/>} />
      <Route path="/register/:id" element={<RegisterDetails />} />
      <Route path="/add-activity/:registerId" element={<AddActivity />} />
      <Route path="/update-activity/:activityId" element={<UpdateActivity />} />
      <Route path="/add-register/:professorId" element={<AddRegister />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  </div>
  );
  
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignupScreen from "./screens/SignupScreen/SignupScreen";
import Landingpage from "./screens/Landingpage/Landingpage";
import Frontpage from "./screens/Frontpage/Frontpage";
import AdminSignup from "./screens/AdminSignup/AdminSignup";
import AdminLogin from "./screens/AdminLogin/AdminLogin";
import UserManagement from "./screens/EditUser/EditUser";
import User from "./screens/User/User";
import EditUser from "./screens/EditUser/EditUser";
import AddUser from './screens/AddUser/AddUser';

function App() {


   


  return (
    <div>
  
    
    <BrowserRouter>
    {/* <Header /> */}

    
      <main >

        <Routes>


          <Route path='/' element={<Landingpage/>} exact/>
         <Route path="/signup" element={<SignupScreen/>} exact/>
         <Route path="/login" element={<LoginScreen/>} exact />
         <Route path="/frontpage" element={<Frontpage/>}/>
         <Route path='/admin' element={<AdminLogin/>}/>

         {/* <Route path='/adminsignup' element={<AdminSignup/>}/> */}

         <Route path='/usermanagement' element={<UserManagement/>}/>
         <Route path='/usermanagements' element={<User/>}/>
        <Route path='/edituser/:userId' element={<EditUser/>}/>
         <Route path='/adduser' element={<AddUser/>}/>
        </Routes>
       
        
      </main>
      {/* <Footer /> */}
     

    </BrowserRouter>
    

    
    </div>
    );
}

export default App;

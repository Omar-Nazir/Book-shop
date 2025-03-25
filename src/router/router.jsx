import Mainlayout from '../layout/mainlayout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/errorpage';
import Registration from '../pages/registration';
import Login from '../pages/login';
import PasswordForgot from '../pages/passwordforgot';
import Emailconfirm from '../pages/Emailconfirm';
import { Children } from 'react';
const router=createBrowserRouter([
    {
      path:"/",
      element:<Mainlayout/>,
      children:[
       {path:"", element:<Home/>}, 
        {path:"registration", element:<Registration/>},
        {path:"login", element:<Login/>},
        {path:"*", element:<ErrorPage/>},
        {path:"passwordforgot", element:<PasswordForgot/>},
        {path:"Emailconfirm", element:<Emailconfirm/>}
      ],
    },
//       <Header/> 
//       <Home/>
//         <Footer/></div>
//     },
//     {
//       path:"/registration",
//       element:<div className="h-screen w-screen font-serif">
//       <Header/> 
//       <Registration/>
//         <Footer/></div>
//     },
//     {
//       path:"/login",
//       element:<div className="h-screen w-screen font-serif">
//       <Header/> 
//       <Login/>
  
//         <Footer/></div>
//         }
  ])
  export default router;
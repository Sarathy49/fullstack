import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./assets/pages/Home"
import EventList from "./assets/pages/EventList/EventList"
import EventDetails from "./assets/pages/EventDetails/EventDetails"
import FilterEvents from "./assets/pages/FilterEvents/FilterEvents"
import { Suspense, lazy } from "react"
import Spinner from "./assets/components/Spinner"
import Login from "./assets/pages/Login"
import Profile from "./assets/pages/Profile"
import AdminLogin from "./assets/pages/AdminLogin"
// import EventReg from "./assets/pages/EventReg"
import AdminMain from "./assets/pages/AdminMain"
import Usergroup from "./assets/pages/Usergroup"
import Addevent from "./assets/pages/Addevent"
import EnrollForm from "./assets/pages/EnrollForm"
import UserProfile from "./assets/pages/Userprofile"
import Payment from "./assets/pages/Payment"



const LazyAbout = lazy( () => import("./assets/pages/About"))
const LazyContact =lazy(() => import("./assets/pages/Contact"))
const LazySign = lazy(()=> import("./assets/pages/Signup"))

const App = () => {

  const router=createBrowserRouter(
    [
      {
        path: '/home',
        element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
      },
      {
        path:'/about',
        element:<Suspense fallback={<Spinner/>}><LazyAbout /></Suspense>
      },
      {
        path:'/contact',
        element:<Suspense fallback={<Spinner/>}><LazyContact /></Suspense>
      },
      {
        path:'/',
        element:<Login />
      },
      {
        path:'/reg',
        element:<Suspense fallback={<Spinner/>}><LazySign /></Suspense>
      },
      {
        path:'/allevent',
        element:<EventList/>
      },
      {
        path:'/find-events',
        element:<FilterEvents/>
      },
      {
        path:'/events/:id',
        element:<EventDetails/>
      },
      {
        path:'/profile',
        element:<Profile/>

      },
      {
        path:'/adminlogin',
        element:<AdminLogin/>
      },
      {
        path:'/ereg',
        element:<EnrollForm/>
      },
      {
        path:'/adminmain',
        element:<AdminMain/>
      },{
        path:'/userg',
        element:<Usergroup/>
      },
      {
        path:'/addevent',
        element:<Addevent/>
      },
      {
        path:'/userprofile',
        element:<UserProfile/>
      },
      {
        path:'/payment',
        element:<Payment/>
      }

    ]
  )

  return (
    <RouterProvider router={router}/>
   

    
    
   
  )
}

export default App;

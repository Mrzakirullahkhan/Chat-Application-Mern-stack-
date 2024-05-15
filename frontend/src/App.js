
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/HomePage';
import Login from './components/Login';
import SignUp from "./components/SignUp"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/registure",
    element:<SignUp/>
  },
  {
    path:"/login",
    element:<Login/>
  },
])
function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;


import './App.css';
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:"<HomePage/>"
  },
  {
    path:"/registure",
    element:"<SignUp/>"
  },
  {
    path:"/login",
    element:"<Login/>"
  },
])
function App() {
  return (
    <div className="App">
      zakir khan chat application 
      
    </div>
  );
}

export default App;

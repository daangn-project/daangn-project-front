import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import MarketPlace from "./pages/marketplace";


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/marketplace' element={<MarketPlace/>}></Route>
    </Routes>
  </Router>





  )
 };

export default App;

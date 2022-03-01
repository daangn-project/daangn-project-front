import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ProductMain from "./pages/product/ProductMain";
import ProductCreate from "./pages/product/ProductCreate";
import ProductDetail from "./pages/product/ProductDetail";
import CommunityPostMain from "./pages/community/CommunityMain";

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/community' element={<CommunityPostMain/>}></Route>  
      <Route path='/products' element={<ProductMain/>}></Route>
      <Route path='/new-products' element={<ProductCreate/>}></Route>
      <Route path='/products/:id' element={<ProductDetail/>}></Route>
    </Routes>
  </Router>
  )
 };

export default App;

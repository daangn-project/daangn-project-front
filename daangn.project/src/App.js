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

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products' element={<ProductMain/>}></Route>
      <Route path='/new-itemposts' element={<ProductCreate/>}></Route>
      <Route path='/item-posts/:id' element={<ProductDetail/>}></Route>
    </Routes>
  </Router>
  )
 };

export default App;

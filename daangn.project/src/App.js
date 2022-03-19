import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ProductMain from "./pages/product/ProductMain";
import ProductCreate from "./pages/product/ProductCreate";
import ProductDetail from "./pages/product/ProductDetail";
import CommunityMain from "./pages/community/CommunityMain";
import CommunityDetail from "./pages/community/CommunityDetail";
import CommunityCreate from "./pages/community/CommunityCreate";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/communities" element={<CommunityMain />}></Route>
        <Route path="/communities/:id" element={<CommunityDetail />}></Route>
        <Route path="/products" element={<ProductMain />}></Route>
        <Route path="/new-products" element={<ProductCreate />}></Route>
        <Route path="/new-communities" element={<CommunityCreate />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

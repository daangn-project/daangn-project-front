import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import ItemPostMain from "./pages/marketplace/ItemPostMain";
import ItemPostCreate from "./pages/marketplace/itemPostCreate";
import ItemPostDetail from "./pages/marketplace/ItemPostDetail";
import CommunityPostMain from "./pages/community/CommunityPostMain";

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/marketplace' element={<ItemPostMain/>}></Route>
      <Route path='/new-itemposts' element={<ItemPostCreate/>}></Route>
      <Route path='/item-posts/:id' element={<ItemPostDetail/>}></Route>
      <Route path='/community' element={<CommunityPostMain/>}></Route>
    </Routes>
  </Router>
  )
 };

export default App;

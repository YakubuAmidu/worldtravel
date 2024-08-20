import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/Home/Homepage";
import Product from "../pages/Product/Product";
import Pricing from "../pages/Price/Pricing";
import Pagenotfound from "../pages/Pagenotfound/Pagenotfound";
import Applayout from "../pages/Applayout/Applayout";

function App(){
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="app" element={<Applayout />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
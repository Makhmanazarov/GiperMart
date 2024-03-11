import { Routes,Route } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home/home"
import { Products } from "./pages/about/products"
import {ShopMainSingle} from "./pages/shop-single/shop-main-single"

function App() {
  return (
   <div>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index  element={<Home/>} />
            <Route path="/:category" element={<Products/>} />
            <Route path="/:category/:id" element={<ShopMainSingle/>} />
        </Route>
      </Routes>
   </div>
  )
}

export default App

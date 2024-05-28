import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Auth from "./components/pages/Auth";
import Register from "./components/pages/Register";
import Navbar from "./components/pages/Navbar";
import NotFoundPage from "./components/pages/NotFoundPage";
import Products from "./components/pages/Products";
import Categories from "./components/pages/Categories";
import FormAddProduct from "./components/forms/FormAddProduct";
import FormEditProduct from "./components/forms/FormEditProduct";
import FormAddCategory from "./components/forms/FormAddCategory";
import Users from "./components/pages/Users";
import { useSelector } from "react-redux";


const App = () => {
  const products = useSelector((state: any) => state.products.products);
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<FormAddProduct />} />
          <Route
            path="/edit-product/:id"
            element={<FormEditProduct products={products} />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-category" element={<FormAddCategory />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

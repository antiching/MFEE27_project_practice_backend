import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
//版面組合用元件
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// 以下為各頁面元件
import Home from './pages/Home';
// Account
import AccountLayout from './pages/Account/AccountLayouts';
import AccountInfo from './pages/Account/AccountInfo';
import AccountEdit from './pages/Account/AccountEdit';
import AccountModifyPassword from './pages/Account/AccountModifyPassword';
import AccountOrders from './pages/Account/AccountOrders';
import AccountOrderDetail from './pages/Account/AccountOrderDetail';
import AccountCoupons from './pages/Account/AccountCoupons';
import AccountTracking from './pages/Account/AccountTracking';
import AccountMessages from './pages/Account/AccountMessages';
import Login from './pages/Login';
import Register from './pages/Register';
// <<<<<<< HEAD
import Recipes from './pages/Recipes';
// =======

//products
import ProductsLayout from './pages/Products/ProductsLayout';
import ProductsList from './pages/Products/ProductsList';
import ProductDetail from './pages/ProductDetail';

import ProductsSale from './pages/Products/ProductsSale';

//recipe
import RecipesLayout from './pages/Recipes/RecipesLayout';
import RecipesList from './pages/Recipes/RecipesList';
import RecipeDetail from './pages/Recipes/RecipeDetail';

// >>>>>>> 80c15c7506c277da982a71dde8ecf26285c44c61
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound.js';

//Taja
import { useState } from 'react';

function App() {
  //taja
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      {/* <Menu /> */}
      {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/account/*" element={<AccountLayout />}>
          <Route index element={<AccountInfo />} />
          <Route path="edit" element={<AccountEdit />} />
          <Route path="modifypassword" element={<AccountModifyPassword />} />
          <Route path="orders" element={<AccountOrders />} />
          <Route path="orders/:orderId" element={<AccountOrderDetail />} />
          <Route path="coupons" element={<AccountCoupons />} />
          <Route path="tracking" element={<AccountTracking />} />
          <Route path="messages" element={<AccountMessages />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsList />} />
          {/* <Route path="sale" element={<ProductsSale />} /> */}
        </Route>

        <Route path="/productDetail/:productId" element={<ProductDetail />} />

        <Route path="/recipes" element={<RecipesLayout />}>
          <Route index element={<RecipesList />} />
          <Route path="recipeDetail/:recipeId" element={<RecipeDetail />} />
        </Route>

        <Route
          path="shoppingCart"
          element={<ShoppingCart cartItems={cartItems} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

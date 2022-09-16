import { Link } from 'react-router-dom';
import React from 'react';

function Menu() {
  return (
    <>
      {/* 連結到各頁面連結 */}
      <Link to="/">首頁</Link>
      <Link to="user">會員中心</Link>
      <Link to="login">登入</Link>
      <Link to="register">註冊</Link>
      <Link to="products">所有商品</Link>
      <Link to="recipes">所有食譜</Link>
      <Link to="shoppingCart">購物車</Link>
    </>
  );
}

export default Menu;

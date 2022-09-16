import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Products.scss';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Dropdown } from 'bootstrap';

import { FaSearch, FaArrowUp } from 'react-icons/fa';

import BreadcrumbForProductsList from '../components/BreadcrumbForProductsList';
import AsideForProductsList from '../components/AsideForProductsList';

function ProductsList() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]); //資料最後長相是[]
  //setData是非同步

  //axios 一載入就要打API
  useEffect(() => {
    console.log('Stock', 'useEffect []');
    console.log('useEffect[]', data);
    //promise base
    let getProduct = async () => {
      let response = await axios.get(`http://localhost:3002/api/1.0/products`);
      setData(response.data);
      console.log('useEffect[] after set', data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    console.log('Stock', 'useEffect [data]');
    console.log('useEffect[data]', data);
  }, [data]);

  //測試用 造出有15個元素的陣列
  const arr = Array(15)
    .fill(1)
    .map((num, index) => index + 1);

  // const [data, setData] = useState(arr);
  //利用useState抽換productsMainCategory頁面的內容?
  const [category, setCategory] = useState('植物奶');

  //側欄選單用
  const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
  const dropdownList = [...dropdownElementList].map(
    (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
  );

  //scrollTop btn

 

  return (
    <div className="product_list">
      <div className="container ">
        {/* 麵包屑  調整 待測試*/}
        <BreadcrumbForProductsList />

        {/* TODO:content要改CSS */}
        <div className=" product_list-container ">
          {/* 側欄選單 待測試 */}
          <AsideForProductsList />
          <div className="products_list-content col-lg-9 ">
            <div className="products_list-category-product-box  ">
              <div className="products_list-category-title ">
                {/* 商品種類標題 */}
                <h2>植物奶</h2>
              </div>
              <div className="products_list-order_search ">
                <p className="col-4 text-end">共 180 件商品</p>
                {/* 篩選器 */}
                <span className="dropdown  ">
                  <button
                    className="btn products_list-btn btn-secondary dropdown-toggle products_list-dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    預設排序
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="order_price1">
                        價錢由高到低
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="order_price1">
                        價錢由低到高
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="order_price1">
                        上市日期由新到舊
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="order_price1">
                        上市日期由舊到新
                      </Link>
                    </li>
                  </ul>
                </span>
                <div className="input-group  products_list-input-group">
                  <input
                    type="text"
                    className="form-control products_list-search-input"
                    placeholder="搜尋"
                    aria-label="搜尋"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="products_list-search"
                    type="submit"
                    id="button"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
            {/* 商品列表 */}
            <div className="card-list products_list-card-list ">
              {/* 抓到資料後 map card */}


              
              {data.map((product) => {
                return (
                  <div key={product.id} className="card products_list-card">
                    <img
                      src={require('../../../Assets/products/milk1001.jpg')}
                      className="card-img-top products_list-card-img-top"
                      alt="..."
                    />
                    <div className=" card-body products_list-card-body">
                      <Link
                        to={`/productDetail/${product.id}`}
                      >
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">
                          {product.id}
                        </h2>
                        <p className="text-gray-700">{product.name}</p>
                      </Link>

                      {/* <Link
                        className=" card-title products_list-card-title word-wrap"
                        to="/productDetail/:productId"
                        // to="/productDetail/:productId"
                      >
                        Pacific Foods Organic Oat Original 植物牛奶,有機燕麥 -
                        原創,32 液體盎司(約 12 毫升)
                      </Link> */}

                      <p className=" card-text products_list-card-text">
                        NT${data.price}123
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* 頁數元件化? TODO:去菀萱那 COPY nav */}
        <nav aria-label="Page navigation ">
          <ul className="pagination recipe-pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li class="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ProductsList;

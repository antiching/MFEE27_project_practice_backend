import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './ProductDetailBreadcrumb.scss';

function BreadcrumbForDetail() {
  return (
    <>
      <nav
        className="product_detail-breadcrumb-detail-whole align-items-center"
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb product_detail-breadcrumb align-items-center">
          <li className="breadcrumb-item product_detail-breadcrumb-item">
            <Link to="/">
              <FaHome />
            </Link>
          </li>
          <li className="breadcrumb-item product_detail-breadcrumb-item ">
            <Link to="/products">植物奶</Link>
          </li>
          <li className="breadcrumb-item product_detail-breadcrumb-item">
            <Link to="/products"> 燕麥奶</Link>
            {/* 抽換 用context*/}
          </li>
          <li
            className="breadcrumb-item product_detail-breadcrumb-item active"
            aria-current="page"
          >
            Pacific Foods Organic Oat Original 植物牛奶,有機燕麥 - 原創,32
            液體盎司(約 12 毫升)
          </li>
        </ol>
      </nav>
    </>
  );
}

export default BreadcrumbForDetail;

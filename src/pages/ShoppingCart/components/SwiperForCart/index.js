import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperForCart.scss';

function SwiperForCart() {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
        },
        '@0.75': {
          slidesPerView: 2,
        },
        '@1.00': {
          slidesPerView: 3,
        },
        '@1.50': {
          slidesPerView: 4,
        },
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text cart_detail_price ">NT156</p>
            <button className=" btn btn-primary text-light px-4">
              我要加購
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text cart_detail_price">NT156</p>
            <button className=" btn btn-primary text-light px-4">
              我要加購
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text cart_detail_price">NT156</p>
            <button className=" btn btn-primary text-light px-4">
              我要加購
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text cart_detail_price">NT156</p>
            <button className=" btn btn-primary text-light px-4">
              我要加購
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text cart_detail_price">NT156</p>
            <button className=" btn btn-primary text-light px-4">
              我要加購
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card product_detail-card">
          <img
            src={require('../../../../Assets/products/milk1002.jpg')}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body products_detail-card-body">
            <Link className="card-title product_detail-card-title" to="">
              咖啡師燕麥奶 (1000ml)
            </Link>
            <p className="card-text cart_detail_price">NT156</p>
            <button className=" btn btn-primary text-light px-4">
              我要加購
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperForCart;

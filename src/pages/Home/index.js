import React from 'react';
import './index.scss';
import SwiperForHome from './SwiperForHome';
import { FiArrowLeftCircle } from 'react-icons/fi';

function Home(props) {
  return (
    <div>
      {/* // swiper */}
      <SwiperForHome />

      <div className="mt-5 d-md-flex justify-content-between">
        <img
          src={require('../../Assets/Home/ad/ad_1.png')}
          className="card-img-top home_ad"
          alt="..."
        />
        <img
          src={require('../../Assets/Home/ad/ad_2.png')}
          className="card-img-top home_ad"
          alt="..."
        />
        <img
          src={require('../../Assets/Home/ad/ad_3.png')}
          className="card-img-top home_ad"
          alt="..."
        />
      </div>
      <div className="home_recommend my-5">
        <p className="home_title text-center">Hot Sale</p>
      </div>
      <div className="container">
        <ul className="d-flex  row">
          <li className="col-sm-5  col-md-4  col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
          <li className="col-sm-5 col-md-4 col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
          <li className="col-sm-5 col-md-4 col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
          <li className=" col-sm-5 col-md-4 col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
        </ul>
      </div>
      <div className="home_recommend my-5">
        <p className="home_title text-center">Recipe</p>
      </div>
      <div className="container">
        <ul className="d-flex row my-5">
          <li className=" col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className="col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className="col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className="col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

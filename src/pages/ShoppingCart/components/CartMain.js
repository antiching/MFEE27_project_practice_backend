import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CartMain.scss';
import { RiNumber1 } from 'react-icons/ri';
import { BiX } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import SwiperForCart from './SwiperForCart';

function CartMain({
  data,
  setData,
  total,
  setTotal,
  totalAmount,
  setTotalAmount,
  handleChange,
  handleRemove,
  handleTotal,
}) {
  //setData是非同步

  return (
    <div>
      <div>
        <div className="my-4">
          <div className="position-absolute cart_number rounded-circle bg-secondary  "></div>
          <RiNumber1 className="mx-auto ms-1 " />
          {/* 購物車內容 */}
          <span className="cart_title ms-2"> 購物車內容</span>
          {/* desktop */}
          <ul className="cart_main_desktop  mt-3 cart_card cart_product_list">
            <li className="d-flex row bg-secondary cart_heading">
              <div className="cart_th col-lg-5 col-md-4  d-sm-inline">
                商品明細
              </div>
              <div className="cart_th col-lg-2 col-md-2 d-none d-md-block">
                單價
              </div>
              <div className="cart_th col-lg-2 col-md-2 d-none d-md-block">
                數量
              </div>
              <div className="cart_th col-lg-2 col-md-2 d-none d-md-block">
                小計
              </div>
              <div className="cart_delete col-1"></div>
            </li>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <li className=" d-flex row align-items-center my-3">
                    <div className="d-flex detail col-lg-5 col-md-4 align-items-center ">
                      <img
                        className="cart_product_pic"
                        src={require(`../../../Assets/products/${item.image}`)}
                        alt=""
                      />
                      <div className="ms-3">{item.name}</div>
                    </div>
                    <div className="cart_price col-2">
                      <div>
                        NT$ <em className="cart">{item.price}</em>
                      </div>
                    </div>
                    <div className="d-flex cart_counter col-2 align-items-center">
                      <button
                        name={item.product_id}
                        onClick={() => handleChange(item, -1)}
                        className="cart_add p-1 border border-secondary rounded"
                      >
                        <BiMinus />
                      </button>
                      <div className="cart_total_amount mx-2 ">
                        {/* amount - 與庫存有關 */}
                        {item.amount}
                      </div>
                      <button
                        onClick={() => handleChange(item, 1)}
                        className="cart_sub p-1 border border-secondary rounded"
                      >
                        <BiPlus />
                      </button>
                    </div>
                    <div className="cart_subtotal col-1">
                      <div>NT${item.price * item.amount}</div>
                    </div>
                    <button
                      onClick={() => handleRemove(item.product_id)}
                      className="cart_button delete col-1"
                    >
                      <BiX size={25} />
                    </button>
                  </li>
                </div>
              );
            })}
            <li className="justify-content-end">
              購物車內合計有 {totalAmount} 項商品
            </li>
          </ul>
          {/* table & mobile */}
          <ul className="cart_main_tablet mt-3 cart_card cart_product_list">
            <li className="d-flex bg-secondary cart_heading">
              <div className="cart_th">商品明細</div>
            </li>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <li className=" row align-items-center my-3">
                    <div className="d-flex">
                      <img
                        className="cart_item_pic"
                        src={require(`../../../Assets/products/${item.image}`)}
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <div className="ms-4 mt-3 d-flex ">{item.name}</div>
                          <button className="delete cart_button">
                            <BiX size={25} />
                          </button>
                        </div>
                        <div className="ms-4 my-3 cart">NT$ 3,5</div>
                      </div>
                    </div>

                    <div className=" d-flex justify-content-between mt-3">
                      <div className="d-flex cart_counter col-2 align-items-center">
                        <button className="cart_button cart_add p-2 border border-secondary rounded">
                          <BiMinus />
                        </button>
                        <div className="cart_total_amount mx-3 ">1</div>
                        <button className="cart_button cart_sub p-2 border border-secondary rounded">
                          <BiPlus />
                        </button>
                      </div>
                      <div className="cart_subtotal col-2  text-primary  d-flex align-items-center">
                        NT$ 3,566
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}

            <li className="justify-content-end">購物車內合計有 2 項商品</li>
          </ul>

          {/* 訂單加購商品區 */}

          <div className="cart_title ms-2 my-3">訂單加購商品區</div>

          <hr />

          <SwiperForCart />
        </div>
      </div>
    </div>
  );
}

export default CartMain;

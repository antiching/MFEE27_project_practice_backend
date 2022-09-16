import React from 'react';
import { useState, useEffect } from 'react';
// import { IconName } from 'react-icons/fa';
import CartMain from './components/CartMain';
import CartCoupon from './components/CartCoupon';
import Shipping from './components/Shipping';
import SideSection from './components/SideSection';
// import '../../styles/global.scss'; //這行不用下喔，上層有引入了
import './styles/index.scss';
import axios from 'axios';

function ShoppingCart() {
  // const [error, setError] = useState(null);
  const [data, setData] = useState([]); //資料最後長相是[]
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //axios 一載入就要打API
  useEffect(() => {
    console.log('Cart', 'useEffect []');
    console.log('useEffect[]', data);
    //promise base
    let getItemDetail = async () => {
      let response = await axios.get(`http://localhost:3002/api/1.0/carts`);
      setData(response.data);
      console.log('useEffect[] after set', data);
    };
    getItemDetail();
  }, []);

  useEffect(() => {
    console.log('Cart', 'useEffect [data]');
    console.log('useEffect[data]', data);
  }, [data]);
  console.log('data', data);

  //更新資料庫 購物車商品數量
  async function handleUpdateCartItem(amount, productID) {
    console.log('handleUpdateCartItem', amount);
    let response = await axios.put(
      `http://localhost:3002/api/1.0/member/product/update/${productID}`
    );
    console.log('handleAddCartItem', response.data);
  }

  // [{…}, {…}, {…}, {…}]
  // 0: {user_id: 2, product_id: 2, amount: 1, name: '咖啡師燕麥奶 (1000ml)', price: '179', …}
  // 1: {user_id: 1, product_id: 3, amount: 1, name: '咖啡大師燕麥奶(1L/罐)', price: '350', …}

  // 阻擋預設表單送出行為
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //數量增減
  const handleChange = (item, d) => {
    const ind = data.indexOf(item);
    const arr = data;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setData([...arr]);
  };

  //移除產品
  const handleRemove = (id) => {
    const arr = data.filter((item) => item.product_id !== id);
    setData(arr);
    setTotal(); //重新計算總價
    setTotalAmount(); //重新計算總數量
  };

  //計算總價
  const handleTotal = () => {
    let total = 0;
    data.map((item) => {
      total += item.amount * item.price;
      setTotal(total);
    });
  };

  //計算總數量
  const handleTotalAmount = () => {
    let totalAmount = 0;
    data.map((item) => {
      totalAmount += item.amount;
      setTotalAmount(totalAmount);
    });
  };

  useEffect(() => {
    handleTotal();
    handleTotalAmount();
  });

  return (
    <div className="container">
      {/* desktop */}
      <div className="mt-4 row  cart_index_desktop ">
        <div className="col-2">
          <SideSection
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            handleTotalAmount={handleTotalAmount}
          />
        </div>
        <div className="col-9">
          <form action="" onSubmit={handleSubmit}>
            <CartMain
              data={data}
              setData={setData}
              handleChange={handleChange}
              handleRemove={handleRemove}
              total={total}
              setTotal={setTotal}
              handleTotal={handleTotal}
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
              handleTotalAmount={handleTotalAmount}
            />
            <CartCoupon />
            <Shipping />

            <div className="d-flex align-items-center">
              <input type="checkbox" id="secret" name="secret" />
              <label for="secret" className="ps-3">
                同意會員責任規範及商家會員條款
              </label>
            </div>

            <button
              type="submit"
              className="col-12 btn  btn-primary text-light px-4   my-3 text-center"
            >
              結帳
            </button>
          </form>
        </div>
      </div>

      {/* mobile &  tablet */}
      <div className="my-4  cart_index_tablet ">
        <div>
          <CartMain data={data} setData={setData} handleChange={handleChange} />
          <CartCoupon />
          <SideSection
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleRemove={handleRemove}
            total={total}
            setTotal={setTotal}
            handleTotal={handleTotal}
          />
          <Shipping />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

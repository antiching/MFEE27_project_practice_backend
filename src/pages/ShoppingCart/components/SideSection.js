import { React, useEffect } from 'react';
import { useState } from 'react';
import { BsFillCaretUpFill, BsTypeH1 } from 'react-icons/bs';
import '../styles/SideSection.scss';

function SideSection({
  data,
  setData,
  total,
  setTotal,
  totalAmount,
  setTotalAmount,
}) {
  const [show, setShow] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <div>
      <div className="cart_card my-3 ">
        <div className="title ">結帳金額</div>
        <hr />
        <span className="d-flex justify-content-between">
          商品小計
          <span>
            NT$ <em>{total}</em>
          </span>
        </span>
        <hr />
        <span className="d-flex justify-content-between">
          運費
          <span>
            NT$ <em>80</em>
          </span>
        </span>
        <hr />
        <span className="d-flex justify-content-between  align-items-end">
          應付總額
          <span className=" text-primary ">
            NT$ <em className="cart_total text-primary">{total + 80}</em>
          </span>
        </span>
      </div>

      <div className="cart_card my-3 cart_card_side_tablet">
        <div className="d-flex title justify-content-between">
          購物車內容
          <button
            className="cart_button d-block"
            onClick={() => setShow(!show)}
          >
            <BsFillCaretUpFill />
          </button>
        </div>
        <hr />

        <span>
          {show
            ? data.map((item, i) => {
                return (
                  <div key={item.id}>
                    <div>
                      <div className="cart_product m-2">{item.name}</div>
                      <div className="d-flex m-2 justify-content-end">
                        數量 <div>{item.amount}</div>
                      </div>
                      <hr />
                    </div>
                  </div>
                );
              })
            : null}

          <span className="m-2">合計有{totalAmount}項商品</span>
        </span>
      </div>
    </div>
  );
}

export default SideSection;

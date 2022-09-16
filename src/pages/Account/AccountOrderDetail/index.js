import React from 'react';
import './index.scss';

function AccountOrderDetail() {
  return (
    <>
      <div className="account_order_detail w-100">
        <div className="account_order_detail-info">
          <p>
            訂單編號:<span className="text-primary">A20220728Q12</span>
          </p>
          <p>2022-07-28 11:30 </p>
        </div>
        <table className="account_order_detail-table table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th scope="col">商品圖片</th>
              <th scope="col">商品名稱</th>
              <th scope="col">商品價格</th>
              <th scope="col">商品數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td>
                <img
                  src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                  alt="apple juice"
                />
              </td>
              <td className="align-middle">Voelkel黑棗汁</td>
              <td className="align-middle">NT$399</td>
              <td className="align-middle">2</td>
              <td className="align-middle">NT$798</td>
            </tr>
            <tr className="border">
              <td>
                <img
                  src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
                  alt="apple juice"
                />
              </td>
              <td className="align-middle">Voelkel黑棗汁</td>
              <td className="align-middle">NT$399</td>
              <td className="align-middle">2</td>
              <td className="align-middle">NT$798</td>
            </tr>
            <tr>
              <td colSpan={5}>
                <ul className="account_order_detail-price">
                  <li className="d-flex justify-content-end">
                    <div>商品總計:</div>
                    <div>NT$1596</div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>優惠券折抵</div>
                    <div>
                      (<span>會員註冊購物金</span>):-NT$100
                    </div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>付款方式:</div>
                    <div>貨到付款</div>
                  </li>
                  <li className="d-flex justify-content-end">
                    <div>運費:</div>
                    <div>NT$0</div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>
                <div className="account_order_detail-total d-flex justify-content-end text-primary">
                  <div>總金額:</div>
                  <div>
                    NT$<span>1696</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* mobile */}
        <ul className="account_order_detail-mobile ">
          <li className="border-bottom d-flex p-2">
            <img
              src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
              alt="apple juice"
            />
            <div className="ms-1">
              <div className="mb-1">
                商品名稱:<span>Voelkel黑棗汁</span>
              </div>
              <div className="mb-1">
                商品價格:<span>NT$399</span>
              </div>
              <div className="mb-1">
                商品數量:<span>2</span>
              </div>
              <div className="mb-1">
                小計:<span>NT$798</span>
              </div>
            </div>
          </li>
          <li className="border-bottom d-flex p-2">
            <img
              src="https://cdn.cybassets.com/media/W1siZiIsIjEzODUwL3Byb2R1Y3RzLzMxOTUxMTA1LzE2MDM0MzQ5NTNfZjFlNjEwOTcxYzcwMWZkMmM3MjEucG5nIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.png?sha=a134d4f53b04b833"
              alt="apple juice"
            />
            <div className="ms-1">
              <div className="mb-1">
                商品名稱:<span>Voelkel黑棗汁</span>
              </div>
              <div className="mb-1">
                商品價格:<span>NT$399</span>
              </div>
              <div className="mb-1">
                商品數量:<span>2</span>
              </div>
              <div className="mb-1">
                小計:<span>NT$798</span>
              </div>
            </div>
          </li>

          <li className="p-2 text-end">
            <div className="mb-1">
              商品總計:<span>NT$1596</span>
            </div>
            <div className="mb-1">
              優惠券折抵(<span>會員註冊購物金</span>):-NT$100
            </div>
            <div className="mb-1">
              付款方式:<span>貨到付款</span>
            </div>
            <div className="mb-1">
              運費:<span>NT$0</span>
            </div>
            <div className="mb-1 text-primary">
              總金額:NT$<span>1696</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AccountOrderDetail;

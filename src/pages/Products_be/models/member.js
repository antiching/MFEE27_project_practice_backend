const pool = require('../utils/db');

// 加入購物車 button
// FIXME insert  user_id  還有 預設amount=1
async function addCartItem(productId) {
  let [result] = await pool.execute(
    'INSERT INTO member_cartItems (product_id) VALUE (?)',
    [productId]
  );
  console.log('addCartItem', result);
}

// cart 修改商品數量
async function updateCartItem(amount, productId) {
  let [result] = await pool.execute(
    'UPDATE  member_cartItems (amount) VALUE (?) WHERE productId=(?)',
    [amount, productId]
  );
  console.log('addCartItem', result);
}

module.exports = {
  addCartItem,
  updateCartItem,
};

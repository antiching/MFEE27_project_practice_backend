const pool = require('../utils/db');

// fat controller vs fat model
// controller - service - model


async function getProductByProductId(productId) {
  let [data] = await pool.execute('SELECT * FROM products WHERE id = ?', [
    productId,
  ]);
  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}

module.exports = {
  getProductByProductId,
};

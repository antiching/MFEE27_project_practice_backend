const express = require('express');
const router = express.Router();
const productModel = require('./models/products');
const MemberModel = require('./models/member');

// 初始化 dotenv
require('dotenv').config();

const app = express();

// app.[method]
// method: get, post, delete, put, patch, ...
app.get('/', (req, res) => {
  res.send('Hello Express');
});

const port = process.env.SERVER_PORT;

app.listen(3002, () => {
  console.log(`server start at 3002`);
});

const cors = require('cors');

const corsOptions = {
  //如果
  origin: ['http://localhost:3001'],
}; //可以寫好多組 （指定來源）  ‘＊’允許所有
app.use(cors(corsOptions));

const pool = require('./utils/db');

// 如果要讓 express 認得 json
// Content-Type: application/json
// 就要加上express內建的這個中間件
//放這裡是全站有效
app.use(express.json()); //解析payload 放在req.body的地方

//∆ 頁面顯示列出所有商品列表
app.get('/api/1.0/products', async (req, res, next) => {
  // 寫法1

  console.log('/api/1.0/products'); //驗證是否有進來這個函式（路徑寫錯？）
  let result = await pool.execute('SELECT * FROM products');
  // console.log('result',result)
  let data = result[0]; //觀察資料結構
  // result[
  //   ({ id: "2330", name: "台積電" },
  //   { id: "2412", name: "中華電" },
  //   { id: "2603", name: "長榮" })
  // ];

  // 寫法2:=寫法1的濃縮
  // let [data] = await pool.execute("SELECT * FROM stocks");

  // console.log("result", data);
  res.json(data);
  // let result = await connection.execute;

  //res.json(["長榮航", "聯發科", "台積電"]); //先寫死驗證是否讀得到資料
});

//∆ GET  user購物車資料
//TODO抓取seesion user_id 抓資料表user_id的對應product_id
// SELECT member_cartItems.*, products.name,products.price,products.image  FROM member_cartItems JOIN products ON member_cartItems.product_id = products.id
//  WHERE user_id=1
app.get('/api/1.0/carts', async (req, res, next) => {
  console.log('/api/1.0/carts');
  let result = await pool.execute(
    'SELECT member_cartItems.*, products.name,products.price,products.image FROM member_cartItems JOIN products ON member_cartItems.product_id = products.id'
  );
  let data = result[0]; //觀察資料結構
  res.json(data);
});

//∆ 抓取單一商品資訊
app.get('/api/1.0/products/:productId', async (req, res, next) => {
  const productId = req.params.productId;
  console.log('/api/1.0/products/:productId/單一商品');

  let result = await pool.execute('SELECT * from products WHERE id=?', [
    productId,
  ]);
  let data = result[0];
  res.json(data);
});

//∆ 會員登入狀態 才可以加入購物車  POST /member/products/:productId
//TODO 確認這個productId是否存在
//TODO 加上 authMiddleware.checkLogin

//FIXME    index.js:78 Uncaught (in promise) ＝>user_id沒寫進資料庫欄位
app.post('/api/1.0/member/product/:productId', async (req, res, next) => {
  const productId = req.params.productId;
  let product = await productModel.getProductByProductId(productId);
  if (!product) {
    return res.json({ message: '查無此商品' });
  }
  //TODO 存在：加進member_cartItems資料表

  //TODO  session 裡有 user 資料

  await MemberModel.addCartItem(req.params.productId);
  res.json({ message: 'ok' });
});

//∆ 更新購物車amount數量  POST
app.post(
  '/api/1.0/member/product/update/:productId',
  async (req, res, next) => {
    const productId = req.params.productId;
    let product = await productModel.getProductByProductId(productId);
    if (!product) {
      return res.json({ message: '查無此商品' });
    }

    await MemberModel.updateCartItem(req.params.productId);
    res.json({ message: 'ok' });
  }
);

app.use((req, res, next) => {
  console.log('在所有路由中間件的下面 -> 404 了！');
  res.status(404).send('Not Found!!');
});

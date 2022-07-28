const express = require("express");
const router = express.Router();
const con = require("../lib/db_connections");

// GET ALL PRODUCTS
router.get("/", (req, res) => {
  try {
    con.query(`SELECT * FROM products`, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// GET A SINGLE PRODUCT BY ID
router.get("/:id", (req, res) => {
  try {
    con.query(`SELECT * FROM products where product_id = ${req.params.id}`, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// ADDING A PRODUCT
router.post('/', (req, res) => {
    const { sku, name, price, weight, descriptions, thumbnail, image, category, create_date, stock } = req.body
    try {
        con.query(`INSERT INTO products (sku, name, price, weight, descriptions, thumbnail, image, category, create_date, stock) values ('${sku}', '${name}', '${price}', '${weight}', '${descriptions}', '${thumbnail}', '${image}', '${category}', '${create_date}', '${stock}')`, 
        (err, result) => {
            if (err) throw err;
            res.send(result);
          }); 
    } catch (error) {
       console.log(err) 
    }
});

// DELETE A PRODUCT BY ID
router.delete("/:id", (req, res) => {
  try {
    con.query(`SELECT * FROM products where product_id = ${req.params.id}`, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// UPDATE A PRODUCT BY ID
router.put('/:id', (req, res) => {
  const { sku, name, price, weight, descriptions, thumbnail, image, category, create_date, stock } = req.body
  try {
      con.query(`UPDATE products set sku='${sku}', name='${name}', price='${price}', weight='${weight}', descriptions='${descriptions}', thumbnail='${thumbnail}', image='${image}', category='${category}', create_date='${create_date}', stock='${stock}' WHERE product_id=${req.params.id}`, 
      (err, result) => {
          if (err) throw err;
          res.send(result);
        }); 
  } catch (error) {
     console.log(err) 
  }
});
module.exports = router;
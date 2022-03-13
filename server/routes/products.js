const express = require('express');
const fs = require('fs');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const Product = require('../models/product');

const productImageStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './api/product-images/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: productImageStorage });

router.get('/', (req, res, next) => {
  Product.find()
    .then((docs) => {
      if (docs.length != 0) {
        res.status(200).json(docs);
      } else {
        res.status(200).json({
          message: 'Empty list',
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
});

router.post('/', upload.single('productImage'), (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productPrice: req.body.productPrice,
    productImage: req.file.path,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch();
});

router.delete('/:id', (req, res, next) => {
  Product.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (result.deletedCount != 0) {
        fs.unlink(result.productImage, (error) => {
          if (!error) {
            res.status(200).json(result);
            return;
          } else {
            res.status(500).json(error);
          }
        });
      } else {
        res.status(500).json(result.deletedCount);
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;

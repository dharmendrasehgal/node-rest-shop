const express = require('express');

const router =  express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched!'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productID: req.body.productID,
        qty: req.body.qty
    };
    res.status(201).json({
        message: 'Orders was created!',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details!',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted!'
    });
});

module.exports = router;
const express = require('express');

const router =  express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request from Products API'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request from Products API'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discoved a special ID ...!',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed a new ID!'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(201).json({
        message: 'Updated Product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product!'
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/user-controllers');

router
    .route('/')
    .get(getUsers)
    .post(addUser);

module.exports = router;
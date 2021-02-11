const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.post('/', (req, res) => {
  userService.addUser(req.body, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/', (req, res) => {
  userService.getUsers((err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.get('/:id', (req, res) => {
  userService.getUserById(req.params.id, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.put('/:id', (req, res) => {
  userService.updateUser(req.params.id, req.body ,(err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.delete('/:id', (req, res) => {
  userService.deleteUserById(req.params.id, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;

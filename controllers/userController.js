const { response } = require('express');

const userGet = (req, res = response) => {
  res.json({
    msg: 'get API - controller',
  });
}

const userPost = (req, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: 'post API - controller',
    name,
    age,
  });
}


module.exports  = {
  userGet,
  userPost
}
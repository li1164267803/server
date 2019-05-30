const express= require('express');
const request = require('request'); // 代理解决跨域
const bodyParser = require('body-parser'); // 用于转换post请求数据

const app = new express();

app.use(bodyParser.json());
app.use(express.static('./'));

app.get('/dev', function(req, res, next) { // 接受数据是 req.query
  var url = 'https://sharedev.fjreading.com/api/ecs/v1/goods/list/17662134567?pageNum=1&pageSize=10' // 请求地址
  request.get(url, function(error,response,body){
    if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body))
    }
  });
});

app.post('/post',function(req,res){ // 接受数据是 req.body
  var url = 'https://sharedev.fjreading.com/api/ecs/v1/web/order', // 请求目标的地址
      obj={
          phoneNum: req.body.phoneNum,
          goodsId: req.body.goodsId,
          tradeType: 'NATIVE',
          spbillCreateIp: req.body.spbillCreateIp
      },
      config = {
          url: url,
          method: "POST",
          json: true,
          headers: {
          "content-type": "application/json",
          },
          body: obj
      }    
  request(config, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        res.json(body)
    }
  })
})

app.listen(1000,function(){
    console.log('sucess');
})
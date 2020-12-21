const express = require('express');
let bodyParser = require('body-parser');
const Skeleton = require('./Skeleton')

let app = express();
app.use(bodyParser.json()); // 解析 application/json
app.use(bodyParser.urlencoded({ extended: true }));
let port = process.env.PORT || '3000';

app.listen(port, () => {
  console.log(`服务器已启动开始监听: localhost:${port}`);
});

app.post('/haha', async (req, res) => {
  let s = new Skeleton()
  await s.initialize()
  await s.genHTML(req.body.address)

  res.send()
})
//app.js
//1:加载模块 express
const express = require("express");
const pool = require("./pool");
//引入第三方模块 bodyParser
const bodyParser = require("body-parser");
//2:创建express
var app = express();
//2.1加载跨域访问组件
const cors = require("cors");
//2.2配置允许脚手架访问程序
app.use(cors({
  origin:["http://127.0.0.1:3010","http://localhost:3010"],
  credentials:true  //要求客户端必须携带cookie
}));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));
//7.1.加载第三方模块express-session
const session = require("express-session")
//7.2.对模块配置
app.use(session({
  secret:"128位随机字符",   //安全字符串
  resave:false,            //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{                  //session存活的时间
    maxAge:1000  * 60 * 60 * 24
  }
}))
//3:绑定监听端口 3000
app.listen(3000);
//4:指定静态目录 public
//__dirname 当前程序所有目录完整路径
//console.log(__dirname)
app.use(express.static(__dirname+"/public"));
//功能一:首页轮播图
app.get("/imagelist",(req,res)=>{
  var obj = [
    {id:1,img_url:"http://127.0.0.1:3000/img/fl01.png",title:"“大白”有望成为现实：充气机器人研究取得进展"},
    {id:2,img_url:"http://127.0.0.1:3000/img/fl02.png",title:"已然魔性的雪橇犬哈士奇 —《雪地狂奔》"},
    {id:3,img_url:"http://127.0.0.1:3000/img/fl03.png",title:"《星际争霸2:虚空之遗》国服过审!"},
  ]
  res.send(obj);
})
//功能二:查询商品
app.get("/products",(req,res)=>{
  var sql = "SELECT lid,price,lname,title FROM xz_laptop";
  pool.query(sql,(err,reslut)=>{
    if(err)throw err;
    res.send({code:1,data:reslut});
  })
})

//功能三:加入购物车
app.get("/addCart",(req,res)=>{
  //1:获取3个参数
  var uid = req.query.uid;
  var pid = req.query.pid;
  var c = req.query.count;
  //2:创建sql语句
  var sql  =" INSERT INTO `xz_shoppingcart_item`(`iid`, `user_id`, `product_id`, `count`, `is_checked`) VALUES (null,?,?,?,0)";

  pool.query(sql,[uid,pid,c],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"购物车添加成功"});
  });
  //3:返回添加结果
})

//功能四:查询商品详细信息
app.get("/getTitle",(req,res)=>{
  //1:获取参数 uid
  var lid = req.query.lid;
  //3:创建sql
  var sql =" SELECT lname,title,subtitle FROM xz_laptop WHERE lid = ?";
  lid = parseInt(lid);
  pool.query(sql,[lid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
  });
  //4:返回结果
})

//功能五:查询商品详细信息
app.get("/getPrice",(req,res)=>{
  //1:获取参数 uid
  var lid = req.query.lid;
  //3:创建sql
  var sql =" SELECT price FROM xz_laptop WHERE lid = ?";
  lid = parseInt(lid);
  pool.query(sql,[lid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
  });
  //4:返回结果
})

//功能六:查询购物详细信息
app.get("/getCarts",(req,res)=>{
  //1:获取参数 uid
  var uid = req.query.uid;
  //3:创建sql
  var sql =" SELECT c.iid,c.user_id,c.count";
  sql +=" ,p.price,p.lname";
  sql +=" FROM xz_laptop p,";
  sql +=" xz_shoppingcart_item c";
  sql +=" WHERE p.lid = c.product_id";
  sql +=" AND c.user_id = ?";
  uid = parseInt(uid);
  pool.query(sql,[uid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
  });
  //4:返回结果
})

//功能七:更新购物数量
app.get("/updateCart",(req,res)=>{
  //1:参数 iid/count
  var iid = req.query.iid;
  var count = req.query.count;
  //2:sql  UPDATE xz_shoppingcart_item
  //       SET count = ? WHERE iid = ? 
  var sql = " UPDATE xz_shoppingcart_item";
  sql += " SET count = ? WHERE iid = ?";
  iid = parseInt(iid);
  count = parseInt(count);
  pool.query(sql,[count,iid],(err,result)=>{
       if(err)throw err;
       if(result.affectedRows > 0)
        res.send({code:1,msg:"数量修改成功"});
      else
        res.send({code:-1,msg:"数量修改失败"});
  })
  //3:json {code:1,msg:"数量修改成功"}
})
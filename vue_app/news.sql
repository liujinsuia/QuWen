SET NAMES UTF8;
DROP DATABASE IF EXISTS news;
CREATE DATABASE news CHARSET=utf8;

USE news;

CREATE TABLE news_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32),
  img_url VARCHAR(225)
);
INSERT INTO news_user VALUES(null,'Super invincible 菁',md5('123'),'http://127.0.0.1:3000/a1.png');
INSERT INTO news_user VALUES(null,'La Da Dee',md5('123'),'http://127.0.0.1:3000/a2.png');
INSERT INTO news_user VALUES(null,'AbsScript',md5('123'),'http://127.0.0.1:3000/a3.png');
INSERT INTO news_user VALUES(null,'养了猫的飞飞',md5('123'),'http://127.0.0.1:3000/a4.png');
INSERT INTO news_user VALUES(null,'大兔',md5('123'),'http://127.0.0.1:3000/a5.png');
INSERT INTO news_user VALUES(null,'Hope',md5('123'),'http://127.0.0.1:3000/a6.png');

CREATE TABLE news_images(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
);
INSERT INTO news_imagelist VALUES(null,
'http://127.0.0.1:3000/img/fl01.png');
INSERT INTO news_imagelist VALUES(null,
'http://127.0.0.1:3000/img/fl02.png');
INSERT INTO news_imagelist VALUES(null,
'http://127.0.0.1:3000/img/fl03.png');


CREATE TABLE news_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  use_id  INT,
  title   VARCHAR(255),
  content VARCHAR(2000),
  click   INT,
  img_url VARCHAR(255),
  price   DECIMAL(10,2),
  ctime   DATETIME
);
INSERT INTO news_news VALUES(null,1,'121','123',0,
'http://127.0.0.1:3000/a1.png',0,now());

### 基于express的登录注册功能

* REST api设计 
  route  --->   controller   --->   service   --->   db
  路由层：只负责处理请求路径
  控制层：只处理response
  服务层：只处理业务逻辑，比如身份认证可放在这里处理
  数据层：只处理db
  inspired by https://www.freecodecamp.org/chinese/news/rest-api-design-best-practices-build-a-rest-api/

* 数据库mongoose

* 网络请求axios

* 身份认证jsonwebtoken
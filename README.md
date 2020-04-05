# nodejs-express

```
express 是nodejs的一个web框架，使用express,能够更便捷的使用nodejs.

express-generator是express应用生成器，相当于express 的骨架，进入一个web项目中后，使用express projectname命令，能快速构建projectname这个应用的目录结构。

1、创建项目，在项目目录输入命令：express，然后输入Y
2、npm install
3、npm start

/bin：用来启动应用（服务器），可在里面设置启动的端口号等。
/public：存放静态资源目录
/routes：路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。可以认为是controller（控制器）目录，路由。
/views：模板文件所在目录，文件格式为.jade，可以认为是view(视图)目录
app.js 程序main文件，这个是服务器启动的入口

```
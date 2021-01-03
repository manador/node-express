# Express CURD

## 起步

- 初始化
- 模板处理

## 路由

|请求方法|请求路径|GET参数|POST参数|备注|
|-------|--------|-------|-------|----|
|GET    |/students|||渲染列表页面|
|GET    |/students/add|||渲染新增页面|
|POST   |/students/add||name、age、gender、hobbies|处理新增数据|
|GET    |/students/edit|id||渲染编辑页面|
|POST   |/students/edit||id、name、age、gender、hobbies|处理编辑数据|
|GET    |/students/delete|id||处理删除|
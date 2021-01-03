var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1、连接数据库
// 指定的数据库不需要存在，当插入第一条数据之后他被自动创建
mongoose.connect('mongodb://localhost/node-blog',{ useNewUrlParser: true, useUnifiedTopology: true })

// 2、设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 结束的目的是为了保证数据完整性，不要有脏数据
const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

// 3、将文档结构发布为模型
//    mongoose.model 方法就是用来将一个架构发布为model
//    第一个参数：传入一个大写名词单数字符串用来表示数据对象名称
//               mongoose会自动将大写名词转换为小写复数的集合名称
//               如Blog最终会变成blogs
//    第二个参数：架构Schema
//    返回值：模型构造函数
const Blog = mongoose.model('Blog', blogSchema)

// 4、有了模型构造函数后，就可以对集合进行增删改查操作了

// 新增数据
// var firstBlog = new Blog({
//   title:  '第一个博客',
//   author: 'zjz',
//   body:   '这是我的第一个博客内容',
//   comments: [{ body: '测试内容', date: Date.now() }],
//   hidden: 1,
//   meta: {
//     votes: 0,
//     favs:  0
//   }
// })

// firstBlog.save(function(err,res){
//   if(err){
//       console.log('保存失败'+err);
//       return;
//   }
//   console.log('保存成功');
//   console.log(res);
// })

// 更新数据
Blog.findByIdAndUpdate('5ff01321646b923954702625',{
  body:'这是修改后的博客内容'
},function(err,res){
  if(err){
      console.log('更新失败');
      return;
  }
  console.log('更新成功');
  console.log(res);
})

// 查询所有
// Blog.find(function(err,res){
//   if(err){
//       console.log('查询失败');
//       return;
//   }
//   console.log('查询成功');
//   console.log(res);
// })

// 删除数据
// Blog.remove({
//   author: 'zjz'
// },function(err,res){
//   if(err){
//       console.log('删除失败');
//       return;
//   }
//   console.log('删除成功');
//   console.log(res);
// })
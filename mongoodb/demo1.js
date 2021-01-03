var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });

mongoose.Promise = global.Promise;

// 创建一个模型
// 就是设计数据库
// MongoDB是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose这个包可以让你的设计编写过程变的非常简单
var User = mongoose.model('User',{name:String});

// 实例化一个User
var jack = new User({name: 'Jack'});

// 持久化保存jack实例
jack.save(function(err,res){
  if (err) {
    console.log(err);
    return;
  }
  
  console.log('jack has created!');
  console.log(res);
})

/**
 * 路由模块
 */
const express = require('express')
const Student = require('./student')
const router = express.Router()

router.get('/',function(req,res){
  res.redirect('/students')
})

// 获取学生列表
router.get('/students',function(req,res){
  Student.query(function(err,students){
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('index.html',{
      students
    })
  })
})

router.get('/students/add',function(req,res){
  res.render('add.html')
})

router.post('/students/add',function(req,res){
  // 1、获取表单数据
  const student = req.body
  // 2、处理
  Student.save(student,function(err){
    if (err) {
      return res.status(500).send('Server error.')
    }
    // 3、发送响应
    res.redirect('/students')
  }) 
})

router.get('/students/edit',function(req,res){
  Student.queryById(parseInt(req.query.id),function(err,student){
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.render('edit.html',{
      student
    })
  })
})

router.post('/students/edit',function(req,res){
  Student.updateById(req.body,function(err){
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

router.get('/students/delete',function(req,res){
  Student.deleteById(parseInt(req.query.id),function(err){
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/')
  })
})

module.exports = router
/**
 * 学生数据处理 API
 */
const fs = require('fs')
const path = require('path')

const file = path.join(__dirname,'./data/data.json')
/**
 * 获取数据
 */
exports.query = function(callback){
  fs.readFile(file,'utf8',function(err,data){
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}

/**
 * 根据ID获取学生对象
 * @param {*} id 
 * @param {*} callback 
 */ 
exports.queryById = function(id,callback){
  fs.readFile(file,'utf8',function(err,data){
    if (err) {
      return callback(err)
    }
    const students = JSON.parse(data).students
    const student = students.find(item => {
      return item.id === id
    })
    callback(null, student)
  })
}

 /**
 * 新增数据
 */
exports.save = function(student,callback){
  fs.readFile(file,'utf8',function(err,data){
    if (err) {
      return callback(err)
    }
    const students = JSON.parse(data).students
    student.id = students[students.length -1 ].id + 1
    students.push(student)

    const fileData = JSON.stringify({
      students: students
    })

    fs.writeFile(file, fileData, function(err){
      if (err) {
        return callback(err)
      }
      callback(null,200)
    })
  })
}

 /**
 * 编辑数据
 */
exports.updateById = function(student,callback){
  fs.readFile(file,'utf8',function(err,data){
    if (err) {
      return callback(err)
    }
    const students = JSON.parse(data).students

    // 将ID转换为数字
    student.id = parseInt(student.id)

    // 获取用户对象
    const stu = students.find((item) => {
      return item.id === student.id
    })

    for (let k in student) {
      stu[k] = student[k]
    }

    const fileData = JSON.stringify({
      students: students
    })

    fs.writeFile(file, fileData, function(err){
      if (err) {
        return callback(err)
      }
      callback(null,200)
    })
  })
}

 /**
 * 删除数据
 */
exports.deleteById = function(id,callback){
  fs.readFile(file,'utf8',function(err,data){
    if (err) {
      return callback(err)
    }
    const students = JSON.parse(data).students

    // 获取要删除的对象索引
    const delId = students.findIndex(item => {
      return item.id === parseInt(id)
    })

    // 从对象中删除
    students.splice(delId,1)

    const fileData = JSON.stringify({
      students: students
    })

    fs.writeFile(file, fileData, function(err){
      if (err) {
        return callback(err)
      }
      callback(null,200)
    })
  })
}
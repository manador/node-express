const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

app.engine('html', require('express-art-template'))
// app.set('views', path.join(__dirname, '/views/'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 挂载路由
app.use(router)

app.listen(3000,function(){
  console.log('App has running on 3000 port ...');
})

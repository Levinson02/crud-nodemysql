const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

// Connect
db.connect((err) => {
  if (err) throw err;
  console.log('MySql connected...')
})

const app = express();

// parse application/json
app.use(bodyParser.json())

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Create Table
app.get('/api/create/postTable', (req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Posts table created...')
  })
});

// Create new post
app.post('/api/create/post', (req, res) => {
  console.log(req.body);
  let post = { title: req.body.title, body: req.body.body };
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

// Get all posts
app.get('/api/get/posts', (req, res) => {
  let sql = 'SELECT * FROM posts';
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
})

// Get single post
app.get('/api/get/post/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

// Update post
app.post('/api/update/post/:id', (req, res) => {
  let data = { title: req.body.title, body: req.body.body };
  let sql = `UPDATE posts SET title = '${data.title}', body = '${data.body}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Post Updated');
  });
})

// Delete post
app.get('/api/delete/post/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
})

app.listen('3000', () => {
  console.log('Server started on port 3000')
});
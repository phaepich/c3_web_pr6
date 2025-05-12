const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/add_info', (req, res) => {
  res.sendFile('add_form.html', { root: './public' })
})

router.post('/add_info', (req, res) => {
  const { name, price, description } = req.body
  const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)'
  db.query(query, [name, price, description], (err, result) => {
    if (err) throw err
    res.render('add_result', { name, price, description })
  })
})

router.get('/del', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err
    res.render('del', { products: results })
  })
})

router.post('/del/:id', (req, res) => {
  const id = req.params.id
  db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
    if (err) throw err
    const deleted = results[0]
    db.query('DELETE FROM products WHERE id = ?', [id], err => {
      if (err) throw err
      res.render('delete_result', { deleted })
    })
  })
})

module.exports = router

import express from 'express'

const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('This is many users.')
})

router.get('/:id', function(req, res) {
  res.send('This is a specific user.')
})

router.post('/', function(req, res) {
  
  res.send('New user created')
})

export default router

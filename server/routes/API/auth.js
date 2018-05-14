import express from 'express'
import bcrypt from 'bcryptjs'

const router = express.Router()

/* GET users listing. */
router.post('/login', function(req, res) {
  const { username, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 12)

  const user = knex('users')
    .select('name', 'password')
    .where('name', username)
    .andWhere('password', hashedPassword)
    .first()

  res.send(user.name)
})

router.get('/logout/:id', function(req, res) {
  res.send('logged out.')
})

export default router

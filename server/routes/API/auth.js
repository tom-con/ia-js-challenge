import express from 'express'
import bcrypt from 'bcryptjs'

const router = express.Router();
 
/* GET users listing. */
router.post('/login', function(req, res, next) {
    const { username, password } = req.params
    let hashedPassword = bcrypt.hashSync(password,12)

    let user = knex('users')
      .select('name', 'password')
      .where('name', username)
      .andWhere('password', hashesPassword)
      .first()
})

router.get('/logout/:id', function(req, res, next) {

})

module.exports = router;

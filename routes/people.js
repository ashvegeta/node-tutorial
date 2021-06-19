const express = require('express')
const router = express.Router()

let {getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson} = require('../controllers/people')

// router.get('/',getPeople)

// // post method
// router.post('/',createPerson)

// // post method
// router.post('/postman',createPersonPostman)

// // put method
// router.put('/:id',updatePerson)

// //delete method
// router.delete('/:id',deletePerson)


//same logic with chaining
router.route('/').get(getPeople).post(createPerson)

router.route('/postman').post(createPersonPostman)

router.route(':id').put(updatePerson).delete(deletePerson)


module.exports = router
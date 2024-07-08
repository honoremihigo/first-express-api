const express = require('express')
const router = express.Router()
const postmanage = require('../controller/postcontroller')


router.get('/', postmanage.getallpost)
router.get('/:id',postmanage.getonepost)
router.post('/', postmanage.postposts)
router.delete('/:id', postmanage.deletepost)
router.put('/:id',postmanage.editpost)


module.exports = router
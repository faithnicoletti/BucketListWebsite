var express = require('express');
var router = express.Router();

const careersController = require('../controllers/careers');


router.get('/', careersController.index);
router.get('/new', careersController.new);
router.post('/', careersController.create);
router.get('/:id', careersController.show);
router.get('/edit/:id', careersController.edit);
router.put('/:id', careersController.update);
router.delete('/:id', careersController.delete);
router.get('/:id/complete', careersController.complete);
router.post('/comments/:id/comments', careersController.submitCareerComments);


module.exports = router;

// router.post('/comments/:id', careersController.submitComments);
// Assuming you are using Express.js
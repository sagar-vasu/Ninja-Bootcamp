import express from 'express';
const router: express.Router = express.Router();

router.use('/todo/api/v1.0', require('./App/app'))


module.exports = router
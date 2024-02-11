import express from "express"
const router = express.Router()

router.get('/lactations')
router.post('/lactation')

export const lactationRoutes = router
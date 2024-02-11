import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { animalCategoryRoutes } from './modules/animalcategory/animalCategory.route'
import { AnimalRoutes } from './modules/animal/animal.route'
import globalErrorHandler from './middlewares/globalErrorhandler'
import { vaccineRoutes } from './modules/vaccine/vaccine.route'
import { lactationRoutes } from './modules/animalLactation/lactation.route'

const app : Application = express()

//parsers
app.use(express.json())
app.use(cors())


// application routes
app.use('/api/v1',animalCategoryRoutes)
app.use('/api/v1',AnimalRoutes)
app.use('/api/v1',vaccineRoutes)
app.use('/api/v1',lactationRoutes)
// app.use('/api/v1',UserRoutes)

app.get('/', (req : Request, res : Response) => {
  res.status(200).json({
    status : "success",
    message : "Welcome to the farm management"
  })
})
app.use(globalErrorHandler);

export default app

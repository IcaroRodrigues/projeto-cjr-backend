import express from 'express'
import cors from 'cors'

import userRoute from './routes/userRoutes.js'
import authRoute from './routes/authRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', userRoute)
app.use('/auth', authRoute)

app.listen(3000, () => console.log('Server is running in port 3000...'))
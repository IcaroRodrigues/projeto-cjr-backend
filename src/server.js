import express from 'express'

import userRoute from './routes/userRoutes.js'
import authRoute from './routes/authRoutes.js'

const app = express()

app.use(express.json())
app.use('/', userRoute)
app.use('/auth', authRoute)

app.listen(3000, () => console.log('Server is running in port 3000...'))
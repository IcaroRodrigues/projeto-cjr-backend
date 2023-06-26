import express from 'express'

import route from './routes/userRoutes.js'

const app = express()

app.use(express.json())
app.use("/", route)

app.listen(3000, () => console.log("Server is running in port 3000..."))
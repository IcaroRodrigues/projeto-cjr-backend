import jwt from 'jsonwebtoken'
import { findUserByIdService } from '../services/userService.js'

export const authMiddleware = (request, response, next) => {

  try {
    const { authorization } = request.headers

    if (!authorization) {
      return response.send(401)
    }

    const parts = authorization.split(" ")

    if (parts.length !== 2) {
      return response.send(401)
    }

    const [schema, token] = parts

    if (schema !== 'Bearer') {
      return response.send(401)
    }

    jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
      if (error) {
        return response.status(401).json({ message: 'Invalid token!' })
      }

      const user = await findUserByIdService(decoded.id)

      if (!user) {
        return response.status(401).json({ message: 'Invalid token!' })
      }

      request.userId = user.id

      return next()
    })
  } catch (error) {
    response.sendStatus(500).send(error.message)
  }
}


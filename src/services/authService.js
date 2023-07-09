import jwt from 'jsonwebtoken'

export const generateUserToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 86400 })
}
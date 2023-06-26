import bcrypt from 'bcrypt'

import prismaClient from '../database/prismaClient.js'

export const createUserService = (userData) => {
  return prismaClient.user.create({ data: userData })
}

export const findAllUsersService = () => {
  return prismaClient.user.findMany()
}

export const findUserByEmailService = (email) => {
  return prismaClient.user.findUnique({ where: { email } })
}

export const hashPasswordService = (password) => {
  return bcrypt.hash(password, 10)
}
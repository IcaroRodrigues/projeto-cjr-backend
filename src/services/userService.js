import bcrypt from 'bcrypt'

import prismaClient from '../database/prismaClient.js'

export const createUserService = (data) => {
  return prismaClient.user.create({ data })
}

export const updateUserService = (id, data) => {
  return prismaClient.user.update({ where: { id }, data })
}

export const deleteUserByIdService = (id) => {
  return prismaClient.user.delete({ where: { id } })
}

export const findAllUsersService = () => {
  return prismaClient.user.findMany()
}

export const findUserByIdService = (id) => {
  return prismaClient.user.findUnique({ where: { id } })
}

export const findUserByEmailService = (email) => {
  return prismaClient.user.findUnique({ where: { email } })
}

export const compareUserPassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword)
}

export const hashPasswordService = (password) => {
  return bcrypt.hash(password, 10)
}
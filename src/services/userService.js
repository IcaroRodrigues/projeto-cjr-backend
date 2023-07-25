import bcrypt from 'bcrypt'

import prismaClient from '../database/prismaClient.js'

export const createUserService = (data) => {
  return prismaClient.user.create({ data })
}

export const updateUserService = (id, data) => {
  return prismaClient.user.update({ where: { id }, data })
}

export const deleteUserByIdService = (id) => {
  const isAdmin = checkAdmin(id);

  if (!isAdmin) {
    throw new Error('Você não tem permissão para excluir uma conta de usuário.');
  }

  return prismaClient.user.delete({ where: { id } });
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

export const resetPasswordService = async (userId, newPassword) => {

  const hashedPassword = await hashPasswordService(newPassword);
  return prismaClient.user.update({ where: { id: userId }, data: { senha: hashedPassword } });
}

// Função para verificar se o usuário é um administrador
const checkAdmin = async (userId) => {
  const user = await prismaClient.user.findUnique({ where: { id: userId } });
  return user.admin === true;
};
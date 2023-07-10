import { findUserByIdService } from '../../services/userService.js'

export const findUserController = async (request, response) => {
  const { id } = request.params

  const user = await findUserByIdService(id)

  if (!user) {
    return response.json({ message: "Nenhum usuário encontrado." })
  }

  delete user.senha

  return response.json(user)
}
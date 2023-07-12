import { findUserByIdService } from '../../services/userService.js'

export const findUserController = async (request, response) => {
  try {
    const id = request.userId

    const user = await findUserByIdService(id)

    if (!user) {
      return response.json({ message: "Nenhum usuário encontrado." })
    }

    delete user.senha

    return response.json(user)
  } catch (error) {
    return response.json({ message: error.message })
  }

}
import { findAllUsersService } from '../../services/userService.js'

export const findAllUserController = async (request, response) => {
  const users = await findAllUsersService()

  if (users.length == 0) {
    return response.json({ message: "Nenhum usuário cadastrado." })
  }

  users.forEach(user => delete (user.senha))

  return response.json(users)
}
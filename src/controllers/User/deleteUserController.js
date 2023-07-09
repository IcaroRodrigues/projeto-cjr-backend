import { deleteUserByIdService, findUserByIdService } from '../../services/userService.js'

export const deleteUserController = async (request, response) => {
  const { id } = request.params

  const user = await findUserByIdService(id)

  if (!user) {
    return response.json({ message: "Usuário não encontrado." })
  }

  await deleteUserByIdService(id)

  return response.json({ message: "Usuário deletado com sucesso!" })
}
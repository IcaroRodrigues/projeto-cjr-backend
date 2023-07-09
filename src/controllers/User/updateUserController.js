import { findUserByIdService, updateUserService } from '../../services/userService.js'

export const updateUserController = async (request, response) => {
  const { username, gender, email, cargo } = request.body

  if (!username && !gender && !email && !cargo) {
    return response.json({ message: "Insira ao menos um campo para alterar." })
  }

  const { id } = request.params

  const user = await findUserByIdService(id)
  
  if (!user) {
    return response.json({ message: "Usuário não encontrado." })
  }

  const data = {
    username,
    gender,
    email,
    cargo
  }

  await updateUserService(id, data)

  return response.json({ message: "Usuário alterado com sucesso!"})
}
import { createUserService, findUserByEmailService, hashPasswordService } from '../services/userService.js'


export const createUserController = async (request, response) => {

  const { username, senha, gender, email, cargo } = request.body

  if (!username || !senha || !gender || !email || !cargo) {
    return response.json({ message: "Todos os campos são obrigatórios!" })
  }

  const emailAlreadyExists = await findUserByEmailService(email)

  if (emailAlreadyExists) {
    return response.json({ message: "Email já existe!" })
  }

  const passwordHashed = await hashPasswordService(senha)

  const userData = {
    username,
    senha: passwordHashed,
    gender,
    email,
    cargo
  }

  const user = await createUserService(userData)

  // delete user.senha

  return response.json(user)
}
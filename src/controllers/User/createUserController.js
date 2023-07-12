import { createUserService, findUserByEmailService, hashPasswordService } from '../../services/userService.js'

export const createUserController = async (request, response) => {
  try {
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
      email: email.toLowerCase(),
      cargo
    }

    const user = await createUserService(userData)

    delete user.senha

    return response.json(user)
  } catch (error) {
    return response.json({ message: error.message })
  }

}
import { compareUserPassword, findUserByEmailService } from '../../services/userService.js'
import { generateUserToken } from '../../services/authService.js'

const authController = async (request, response) => {
  const { email, password } = request.body

  if (!email || !password) {
    response.json({ message: 'Todos os campos precisam ser preenchidos.' })
  }

  const user = await findUserByEmailService(email)

  if (!user) {
    return response.json({ message: 'Email/Password is incorrect!' })
  }

  const passwordIsValid = await compareUserPassword(password, user.senha)

  if (!passwordIsValid) {
    return response.json({ message: 'Email/Password is incorrect!' })
  }

  const token = generateUserToken(user.id)

  response.json({token})
}

export default authController
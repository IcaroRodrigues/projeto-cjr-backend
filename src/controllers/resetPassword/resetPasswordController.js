import { resetPasswordService } from '../../services/userService.js';

export const resetPasswordController = async (request, response) => {
  try {
    const { password } = request.body;
    const userId = request.userId; // O ID do usuário deve ser enviado através do token de autenticação

    await resetPasswordService(userId, password);

    return response.json({ message: 'Senha redefinida com sucesso!' });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

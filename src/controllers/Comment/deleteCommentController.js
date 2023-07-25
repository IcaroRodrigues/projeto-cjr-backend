import { deleteCommentService, findCommentService } from '../../services/commentService.js';

export const deleteCommentController = async (request, response) => {
  try {
    const { id } = request.params;
    const user_id = request.userId;

    const comment = await findCommentService(id);

    if (!comment) {
      return response.status(404).json({ message: 'Comentário não encontrado.' });
    }

    await deleteCommentService(id, user_id);

    return response.json({ message: 'Comentário excluído com sucesso!' });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

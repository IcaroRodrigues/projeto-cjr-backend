import { updateCommentService } from '../../services/commentService.js';

export const updateCommentController = async (request, response) => {
  try {
    const { id } = request.params;
    const { content } = request.body;
    const user_id = request.userId;

    const commentData = {
      content,
    };

    await updateCommentService(id, user_id, commentData);

    return response.json({ message: 'Comentário atualizado com sucesso!' });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

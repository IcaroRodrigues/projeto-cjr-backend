import { findCommentService } from '../../services/commentService.js';

export const findCommentController = async (request, response) => {
  try {
    const { id } = request.params;
    const comment = await findCommentService(id);
    if (!comment) {
      return response.status(404).json({ message: 'Comentário não encontrado.' });
    }
    return response.json(comment);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

import { createCommentService } from '../../services/commentService.js';

export const createCommentController = async (request, response) => {
  try {
    const { post_id, content } = request.body;
    const user_id = request.userId;

    if (!post_id || !content) {
      return response.status(400).json({ message: 'O post_id e o conteúdo do comentário são obrigatórios.' });
    }

    const commentData = {
      post_id,
      user_id,
      content,
    };

    const comment = await createCommentService(commentData);

    return response.json(comment);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

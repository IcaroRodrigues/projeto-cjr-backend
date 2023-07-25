import { findAllCommentsService } from '../../services/commentService.js';

export const findAllCommentsController = async (request, response) => {
  try {
    const comments = await findAllCommentsService();
    return response.json(comments);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

import { findPostByIdService } from '../../services/postService.js';

export const findPostController = async (request, response) => {
  try {
    const { id } = request.params;
    const post = await findPostByIdService(id);

    if (!post) {
      return response.status(404).json({ message: 'Post não encontrado.' });
    }

    return response.json(post);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

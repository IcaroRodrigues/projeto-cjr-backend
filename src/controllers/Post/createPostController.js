import { createPostService } from '../../services/postService.js';

export const createPostController = async (request, response) => {
  try {
    const { content } = request.body;
    const userId = request.userId;

    if (!content) {
      return response.status(400).json({ message: 'O conteúdo do post é obrigatório.' });
    }

    const postData = {
      content,
      user_id: userId,
    };

    const post = await createPostService(postData);

    return response.json(post);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

import { updatePostService } from '../../services/postService.js';

export const updatePostController = async (request, response) => {
  try {
    const { id } = request.params;
    const { content } = request.body;

    if (!content) {
      return response.status(400).json({ message: 'O conteúdo do post é obrigatório.' });
    }

    const postData = {
      content,
    };

    const updatedPost = await updatePostService(id, postData);

    if (!updatedPost) {
      return response.status(404).json({ message: 'Post não encontrado.' });
    }

    return response.json(updatedPost);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

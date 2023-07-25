import { deletePostService, findPostService } from '../../services/postService.js';

export const deletePostController = async (request, response) => {
  try {
    const { id } = request.params;
    const user_id = request.userId;

    const post = await findPostService(id);

    if (!post) {
      return response.status(404).json({ message: 'Publicação não encontrada.' });
    }

    await deletePostService(id, user_id);

    return response.json({ message: 'Publicação excluída com sucesso!' });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

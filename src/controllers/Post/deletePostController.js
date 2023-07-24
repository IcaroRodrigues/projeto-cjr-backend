import { deletePostService } from '../../services/postService.js';

export const deletePostController = async (request, response) => {
  try {
    const { id } = request.params;

    const deletedPost = await deletePostService(id);

    if (!deletedPost) {
      return response.status(404).json({ message: 'Post não encontrado.' });
    }

    return response.json({ message: 'Post excluído com sucesso.' });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

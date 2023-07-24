import { findAllPostsService } from '../../services/postService.js';

export const findAllPostsController = async (request, response) => {
  try {
    const posts = await findAllPostsService();
    return response.json(posts);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

import prismaClient from '../database/prismaClient.js';

export const createPostService = (data) => {
  return prismaClient.post.create({ data });
};

export const updatePostService = (postId, data) => {
  return prismaClient.post.update({ where: { id: postId }, data });
};

export const deletePostService = async (id, userId) => {
    // Verifica se a publicação existe
    const post = await prismaClient.post.findUnique({ where: { id } });
    if (!post) {
      throw new Error('Publicação não encontrada.');
    }
  
    // Verifica se o usuário é o criador da publicação ou um administrador
    if (post.user_id !== userId && !isAdmin(userId)) {
      throw new Error('Você não tem permissão para excluir esta publicação.');
    }
  
    // Exclui a publicação
    await prismaClient.post.delete({ where: { id } });
};
  
export const findAllPostsService = () => {
  return prismaClient.post.findMany();
};

export const findPostByIdService = (postId) => {
  return prismaClient.post.findUnique({ where: { id: postId } });
};

// Função para verificar se o usuário é um administrador
const isAdmin = async (userId) => {
  const user = await prismaClient.user.findUnique({ where: { id: userId } });
  return user.admin === true;
};
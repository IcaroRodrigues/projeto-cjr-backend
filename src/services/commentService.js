import prismaClient from '../database/prismaClient.js';

export const createCommentService = (data) => {
  return prismaClient.comment.create({ data });
};

export const updateCommentService = (id, data) => {
  return prismaClient.comment.update({ where: { id }, data });
};

export const deleteCommentService = async (id, userId) => {
    // Verifica se o comentário existe
    const comment = await prismaClient.comment.findUnique({ where: { id } });
    if (!comment) {
      throw new Error('Comentário não encontrado.');
    }
  
    // Verifica se o usuário é o criador do comentário ou um administrador
    if (comment.user_id !== userId && !isAdmin(userId)) {
      throw new Error('Você não tem permissão para excluir este comentário.');
    }
  
    // Exclui o comentário
    await prismaClient.comment.delete({ where: { id } });
};
  

export const findAllCommentsService = () => {
  return prismaClient.comment.findMany();
};

export const findCommentService = (id) => {
  return prismaClient.comment.findUnique({ where: { id } });
};

// Função para verificar se o usuário é um administrador
const isAdmin = async (userId) => {
    const user = await prismaClient.user.findUnique({ where: { id: userId } });
    return user.admin === true;
  };

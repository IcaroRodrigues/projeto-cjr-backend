import prismaClient from '../database/prismaClient.js';

export const createPostService = (data) => {
  return prismaClient.post.create({ data });
};

export const updatePostService = (postId, data) => {
  return prismaClient.post.update({ where: { id: postId }, data });
};

export const deletePostService = (postId) => {
  return prismaClient.post.delete({ where: { id: postId } });
};

export const findAllPostsService = () => {
  return prismaClient.post.findMany();
};

export const findPostByIdService = (postId) => {
  return prismaClient.post.findUnique({ where: { id: postId } });
};

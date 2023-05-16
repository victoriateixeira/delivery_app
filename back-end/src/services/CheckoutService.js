const { User, Sale } = require('../database/models');

const getAllSellers = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
    
  });
  
  return sellers;
};

// const createSalle = async (title, content, categoryIds, userId) => {
//   const newPost = await Sale.create({
//     title,
//     content,
//     userId,
//     updated: Date.now(),
//     published: Date.now(),
//   });

//   const postCategories = categoryIds.map((categoryId) => ({ categoryId, postId: newPost.id }));
//   await .bulkCreate(postCategories);

//   return newPost;
// };

module.exports = {
  getAllSellers,
  
};
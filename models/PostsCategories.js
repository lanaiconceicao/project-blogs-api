module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, { timestamps: false });
  // Tabela de associação -> aqui apenas juntamos as informações que vem das tabelas
  // Categories + BlogPosts = PostsCategories

  PostsCategories.associate = (models) => {
    // Relacionamento N:N
    // O model BlogPosts PERTENCE A MUITOS
    models.BlogPosts.belongsToMany(
      // 'MUITOS' nesse caso é a tabela Categories
      models.Categories, { as: 'categories',
      // "na chave through estamos informando qual o Model que servira como tabela de associação"
      // https://tableless.com.br/sequelize-a-solu%C3%A7%C3%A3o-para-seus-relacionamentos/
        through: PostsCategories,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      },
    );

    models.Categories.belongsToMany(
      models.BlogPosts, { as: 'posts',
        through: PostsCategories,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      },
    );
  };

  return PostsCategories;
};
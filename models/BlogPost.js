module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: { type: DataTypes.DATE },
      updated: { type: DataTypes.DATE },
    },
    {
      timestamps: false,
    },
  );

  BlogPosts.associate = (models) => {
    // Tipo de relacionamento: 1:N
    // BlogPosts PERTENCE À tabela Users, onde a foreign key é a userId
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
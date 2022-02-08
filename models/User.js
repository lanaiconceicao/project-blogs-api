module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  // No requisito 7, além de criar o model de Blogpost e fazer a association lá
  // Temos que vir aqui indicar que o model User vai estar associado ao model Blogpost
  // A association é como um elo entre as tabelas que possuem relacionamento
  Users.associate = (models) => {
    // Users POSSUI VÁRIOS (valores doados) à tabela BlogPosts, onde a foreign key é a userId
    // Por isso relacionamento 1:N
    Users.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'posts' });
  };

  return Users;
};

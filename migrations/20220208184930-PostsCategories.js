'use strict';

// Relacionamento N:N
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/6a2dbadd-f6c8-400c-9b89-731064a534a6/relacionamentos-nn/2f990148-7b3d-4617-ad46-84331d8df1fd?use_case=side_bar

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'PostsCategories',
      {
        // Tabela intermediária (dica no seeders de como criar a tabela)
        postId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: { model: 'BlogPosts', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        categoryId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: { model: 'Categories', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories')
  }
};

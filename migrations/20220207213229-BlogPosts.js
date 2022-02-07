'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'BlogPosts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: { model: 'Users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          field: 'published',
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          field: 'updated',
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts', null, {});
  }
};

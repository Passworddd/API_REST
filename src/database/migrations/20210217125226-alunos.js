// Criação de tabelas no banco de dados

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
    id: { // Chave primarida da tabela
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    idade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    altura: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};

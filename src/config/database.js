// Modelagem da base de dados

require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: { // Quando um registro foi criado e quando foi atualizado
    timestamps: true,
    underscored: true, // converte por ex: nomeAluno -> nome_aluno
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Recife',
  },
  timezone: 'America/Sao_Paulo',
};

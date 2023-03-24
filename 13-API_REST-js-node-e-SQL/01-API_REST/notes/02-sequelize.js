/* Sequelize

responsável pelo controle da base de dados, como criação de tabelas, edição, etc

instalar o dotenv através do comando:
npm install dotenv

configurar no arquivo:
DATABASE=nomeDoDB
DATABASE_HOST=IPouDomínio
DATABASE_PORT=3306 <- esse valor é padrão
DATABASE_USERNAME=root
DATABASE_PASSWORD=senhaDoDB

criar arquivo no projeto com nome: .sequelizerc

para configurar, digitar no arquivo:

const { resolve } = require('path');

module.exports = {
    config: resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
};

criar um arquivo database.js dentro da pasta config, do src e digitar o seguinte código:

require('dotenv').config();

module.exports = {
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at',
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
};

configurar o MySQL Workbench criando um Schema

executar comando no node:
npm i sequelize mariadb
npm i -D sequelize-cli -> -D equivale a --save-dev
npx sequelize migration:create --name=nomeDoBD

vai ser criada a pasta migrations dentro do database com um arquivo com a data e hora.js

configurar com o código seguinte:

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('alunos', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            sobrenome: {
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
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('alunos');
    },
};

executar comando terminal:
npx sequelize db:migrate
se precisar voltar a migração, usar:
npx sequelize db:migrate:undo

criar model Aluno.js e digitar código:

import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,
        }, {
            sequelize,
        });
        return this;
    }
}

dentro da pasta database, criar arquivo index.js

*/

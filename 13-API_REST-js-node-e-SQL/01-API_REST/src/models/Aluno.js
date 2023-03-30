import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 3 e 255 caracteres.',
                    },
                },
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já cadastrado na base de dados.',
                },
                validate: {
                    isEmail: {
                        msg: 'Necessário informar um endereço de e-mail válido.',
                    },
                },
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade precisa ser um número inteiro e válido.',
                    },
                },
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Peso precisa ser um número válido.',
                    },
                },
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Altura precisa ser um número válido.',
                    },
                },
            },
        }, {
            sequelize,
        });
        return this;
    }
}
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve conter de 3 a 255 caracteres.',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já consta cadastrado.',
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail informado é inválido.',
                    },
                },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 20],
                        msg: 'Campo senha deve conter de 3 a 20 caracteres.',
                    },
                },
            },
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcryptjs.hash(user.password, 8);
            }
        });
        return this;
    }
}

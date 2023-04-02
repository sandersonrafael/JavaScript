"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
    // create
    async store(req, res) {
        try {
            const novoUser = await _User2.default.create(req.body); // cria usuário através de um formulário
            const { id, nome, email } = novoUser;
            return res.json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Index
    async index(req, res) {
        try {
            const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] }); // localiza todos usuários e responde com json com id, nome e email
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    // Show
    async show(req, res) {
        try {
            const user = await _User2.default.findByPk(req.params.id); // encontra pela primary key informada

            const { id, nome, email } = user;
            return res.json({ id, nome, email });
        } catch (e) {
            return res.json(null);
        }
    }

    // Update
    async update(req, res) {
        try {
            const user = await _User2.default.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            const novosDados = await user.update(req.body);

            const { id, nome, email } = novosDados;

            return res.json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // delete
    async delete(req, res) {
        try {
            const user = await _User2.default.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            await user.destroy();

            return res.json('Usuário deletado com sucesso.');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

exports. default = new UserController();

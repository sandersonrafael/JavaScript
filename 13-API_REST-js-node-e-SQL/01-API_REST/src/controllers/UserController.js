import User from '../models/User';

class UserController {
    // create
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body); // cria usuário através de um formulário
            return res.json(novoUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Index
    async index(req, res) {
        try {
            const users = await User.findAll(); // localiza todos usuários e responde com json
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    // Show
    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id); // encontra pela primary key informada
            return res.json(user);
        } catch (e) {
            return res.json(null);
        }
    }

    // Update
    async update(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                });
            }

            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            const novosDados = await user.update(req.body);

            return res.json(novosDados);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // delete
    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado.'],
                });
            }

            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.'],
                });
            }

            await user.destroy();

            return res.json(user);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new UserController();

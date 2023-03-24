import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'André',
            sobrenome: 'Felipe',
            email: 'dede@gmail.com',
            idade: 30,
            peso: 81,
            altura: 1.78,
        });
        res.json(novoAluno);
    }
}

export default new HomeController();

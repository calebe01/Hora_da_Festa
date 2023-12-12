const UserModel = require("../models/User");

const userController = {
    create: async (req, res) => {
        try {
            const user = {
                login: req.body.login,
                password: req.body.password,
            };

            const response = await UserModel.create(user);

            res.status(201).json({ response, msg: "Usuário criado com sucesso" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao criar o usuário" });
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await UserModel.find();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao buscar os usuários" });
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);

            console.log('user: ', user)

            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao buscar o usuário por ID" });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const user = await UserModel.findById(id);

            if (!user) {
                res.status(404).json({ msg: "Usuário não encontrado" });
                return;
            }

            const deletedUser = await UserModel.findByIdAndDelete(id);

            res.status(200).json({ deletedUser, msg: "Usuário excluído com sucesso" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao excluir o usuário" });
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        const user = {
            login: req.body.login,
            password: req.body.password,
        };

        const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });

        if (!updatedUser) {
            res.status(404).json({ msg: "Usuário não encontrado" });
            return;
        }

        res.status(200).json({ updatedUser, msg: "Usuário atualizado com sucesso" });
    },
};

module.exports = userController;

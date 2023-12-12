const { Service: ServiceModel, Service } = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };
            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Serviço criado com sucesso" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao criar o serviço" });
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao buscar os serviços" });
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);
            res.json(service);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao buscar o serviço por ID" });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id; // Corrigindo a obtenção do ID
    
            const service = await ServiceModel.findById(id);
    
            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }
    
            const deletedService = await ServiceModel.findByIdAndDelete(id);
    
            res.status(200).json({ deletedService, msg: "Excluído com sucesso" });
    
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Ocorreu um erro ao excluir o serviço" });
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
    
        const service = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        };
    
        console.log("ID:", id);
        console.log("Service:", service);
    
        const updatedService = await ServiceModel.findByIdAndUpdate(id, service, { new: true });
    
        if (!updatedService) {
            res.status(404).json({ msg: "Serviço não encontrado" });
            return;
        }
    
        res.status(200).json({ updatedService, msg: "Serviço atualizado com sucesso" });
    }
    
};

module.exports = serviceController;


const exchangeServices = require("../services/exchangeServices.js");

const exchangeControllers = {
    create: async (req, res) => {
        const data = req.body;
        const id = req.userId;
        data.userId1 = id;

        const exchange = await exchangeServices.saveExchange(data);

        if (exchange.status > 300) {
            return res.status(exchange.status).json({
                message: exchange.response,
            });
        }

        res.status(201).json(exchange.response);
    },
    getByUser: async (req, res) => {
        const id = req.userId;

        const getExchanges = await exchangeServices.getExchangesByUser(id);

        if (getExchanges.status > 300) {
            return res.status(getExchanges.status).json({
                message: getExchanges.response,
            });
        }

        res.status(200).send(getExchanges.response);
    },
    update: async (req, res) => {
        const data = req.body;
        const id = req.userId;
        data.userId1 = id;

        const exchange = await exchangeServices.update(data);

        if (exchange.status > 300) {
            return res.status(exchange.status).json({
                message: exchange.response,
            });
        }

        res.status(204).json(exchange.response);
    },
};

module.exports = exchangeControllers;

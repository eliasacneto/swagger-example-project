const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Minha primeira API',
            version: '1.0.0',
            description: 'Uma API para gerenciar usuários'
        },
    },

    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
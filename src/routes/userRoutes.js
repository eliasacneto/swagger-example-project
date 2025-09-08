const express = require('express');
const router = express.Router();

/**
 * 
 * @swagger
 * /api/users:
 *  get:
 *    summary: Retorna a lista de todos os usuários
 *    responses:
 *      '200':
 *        description: A lista de usuários
 *      '404':
 *        description: Não encontrado
 *  
 */

router.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Léo' }]);
});

module.exports = router;
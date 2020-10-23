import express, { request, response } from "express";

const app = express();

app.get('/products', (request, response) => {
    console.log('listagem de produtos');

    return response.json([
        'Rafael',
        'Michelle',
        '...',
        'Lorena',
        'Pietro',
        'Lucas'
    ])
});

app.post('/products', (request, response) => {
    const product = {
        name: 'macarrão',
        price: 2.50
    };

    return response.json(product)
});

app.listen(3333);
import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

export default routes

/*const products = [
    'Rafael',
    'Michelle',
    '...',
    'Lorena',
    'Pietro',
    'Lucas'
];

app.get('/products', (request, response) => {
    console.log('listagem de produtos');

    return response.json(products)
});

app.get('/products/:id', (request, response) => {
    const id = Number(request.params.id);

    const product = products[id];

    return response.json(product)
})

app.post('/products', (request, response) => {
    const data = request.body;

    console.log(data);
    
    const product = {
        name: 'macarrão',
        price: 2.50
    };

    return response.json(product)
});*/
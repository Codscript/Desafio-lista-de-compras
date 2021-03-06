import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/products', async (request, response) => {
    const products =  await knex('products').select('*');

    return response.json(products);
});

routes.get('/products/:id', async (request, response) => {
    const id = Number(request.params.id);
    const product =  await knex.select('name', 'price').where('id',id).from('products');
    console.log(product);
    return response.json(product);
});

routes.post('/products', async (request, response) => {
    const  {
        name,
        price
    } = request.body

    await knex('products').insert({
        name,
        price
    });
    return response.json({sucess: true});
});

routes.put('/products/:id', async (request, response) => {
    const id = Number(request.params.id);
    const  {
        name,
        price
    } = request.body

    await knex('products').update({
        name,
        price
    }).where('id', id)
    return response.json({sucess: true});
});

routes.delete('/products/:id', async (request, response) => {
    const id = Number(request.params.id);
    await knex('products').delete().where('id', id)
    return response.json({sucess: true});
});
export default routes

/*

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
import  Knex  from 'knex';

export async function seed(knex: Knex) {
    await knex('products').insert([
        { name: 'arroz', price: 24.90 },
        { name: 'feijão', price: 4.90 },
        { name: 'macarrão', price: 3.90 },
        { name: 'azeite', price: 29.90 },
        { name: 'alho', price: 19.90 },
        { name: 'detergente', price: 2.90 }
    ])
}
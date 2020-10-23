import kenex from 'knex';
import path from 'path';

const connection = kenex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
})

export default connection;
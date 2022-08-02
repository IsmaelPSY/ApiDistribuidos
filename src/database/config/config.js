const config = require('../../config')
module.exports = {
    "development": {
        "username": config.db.development.username,
        "password": config.db.development.password,
        "database": config.db.development.database,
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    production: {
        url: "postgres://amzjavqgumqusl:498dc6e0e7307d3f3c960a6e8232e8a1e564170363d7a9a23b935cb807628ce0@ec2-54-208-104-27.compute-1.amazonaws.com:5432/dc6s9h32v7ssvr",
        use_env_variable: "postgres://amzjavqgumqusl:498dc6e0e7307d3f3c960a6e8232e8a1e564170363d7a9a23b935cb807628ce0@ec2-54-208-104-27.compute-1.amazonaws.com:5432/dc6s9h32v7ssvr",
        dialect: 'postgres',
        protocol: 'postgres',
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    },
}
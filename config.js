require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'qwerty21',
            port: 5432,
            database: 'blog-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
        },
        test: {

        },
        production: {

        }
    }
}

module.exports = configs


// Update with your config settings.

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env


module.exports = {
  test: {
    client: 'postgresql',
    connection: {
      host : DB_HOST,
      user : DB_USER,
      password : DB_PASSWORD,
      database : DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/test'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'ia-challenge',
      password : 'koi392UpT',
      database : 'ia-development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/development'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'ia',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:  __dirname + '/database/knex_migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds/production'
    }
  }

};

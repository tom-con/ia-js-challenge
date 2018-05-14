// Update with your config settings.

module.exports = {

  test: {
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

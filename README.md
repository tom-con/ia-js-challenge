# ia-js-challenge

*Can we have some fun with logos?*

## Geting Started (Basic -- no server)

This project uses Node to power a slim front-end experience for the IA JS challenge. Here's what you'll need to do:

1. Install [Node](https://nodejs.org/en/).
2. Clone or [download](https://github.com/tom-con/ia-js-challenge/archive/master.zip) this repository locally.
3. Run `npm i` when in the root directory of this project to install the dependencies.
4. Run `npm run-scripts build`. This will compile the JS via babel and webpack to a bundle. (*Why?* - Because this project is small, webpack is probably overkill in that it will add more overhead than it saves, however it is a wonderful tool for creating a dependency graph and limiting how many assets we need to pull in.)
5. Open `client/index.html` in your favorite browser.

## Getting Started (Advanced -- server)

This addition to the project sets up a node.js server to manage page rendering and API requests.

1. Follow steps 1-4 above.
2. Run the server by entering `npm start`. The default port is `2000`.
3. Navigate to `http://localhost:2000/` in your favorite browser.

## Setting up the Database

* You'll need to create a `.env` file base don the `.env.example` file.
* Create a local **PostgreSQL** database with any name and add that name to the `DB_NAME` environment variable in the file.

    1. (in postgres command line): `CREATE DATABASE <xxxxxxx>;`

* Create a user and give them privileges on the database you just created.

    1. (in postgres command line): `CREATE USER <xxxxxxxxx>;`
    2. (in postgres command line): `ALTER USER <username> WITH ENCRYPTED PASSWORD '<password>'`;
    3. (in postgres command line): `GRANT ALL PRIVELEGES ON DATABASE <db name> TO <username>;`

* Make sure to update the `.env` file with all the items you just created.
* Migrate and seed the database: `knex migrate:latest --env development`

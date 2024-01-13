**Sample-App**
This is a TypeORM usage test project. It will help understanding some concepts of how to use TypeORM and any ORM in a correct and safe manner.

**How to run it**
First install the project dependencies, for this open a terminal and run `npm i`
We need to create a `.env` file in the project folder, where we need the the following variables:

    NODE_ENV=development
    PORT=3000
    #Database variables
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    POSTGRES_USER=sample-app
    POSTGRES_PASSWORD=ThisShouldBeASecurePassword!
    POSTGRES_DB=sample-app
    POSTGRES_LOGGING=true
    #pgadmin
    PGADMIN_EMAIL=pg@admin.com
    PGADMIN_PASSWORD=ThisShouldBeASecurePassword!
    PGADMIN_PORT=5050

Then, we will need to use docker compose to run services this app depends on. We need docker installed and running on the machine. Open a terminal and run `docker compose --env-file .env up --detach` 
To apply existing database migrations, run `npm run migration:run`
To revert a migration, run `npm run migration:revert`
To create a migration, run `npm run migration:generate ./src/database/migrations/<migration name>`
To run for development, run `npm dev`

**Pending to do**
Fix DataSource in data-source.ts for build 
# Factory Game

> This repo is for a simple scroll timing game.
> This is a mono repo built with vite and is seperated into three micro services:
>
>- Frontend -- React/Typescript/prisma
>
>- Backend -- Apollo/Graphql
>
>- Database -- Postgres/prisma
>
> To get it up and running you must build and run both FE/BE simultaneously

## Development

### Local Env setup
***node must be >= 18.15.0 and npm must be >= 9.5.0***

1. Clone the repo
```git clone https://github.com/bcaliva21/factory_game.git```

2. Enter repo
```cd factory_game```

3. Install Docker

#### Front-end

1. Install frontend dependencies
```cd frontend && npm i```

2. Once dependencies are installed
```npm run dev```

#### Back-end

1. Install backend dependencies
```cd server && npm i```

2. Spin up docker database
```docker-compose up -d postgres```

3. Generate prisma client locally
```npx prisma generate```

4. Sync prisma client with local schemas
```npx prisma migrate dev```

5. Start Back-end
```npm run serve``

### Docker setup

1. Complete docker migration as described below

2. Navigate to localhost:4173 to view project

#### Docker Migration

0. Make sure the postgres container is running
```docker ps```

1. Start docker container
```docker-compose up --build```

2. Open side terminal and execute the following command to enter a bash terminal inside the prisma container
```docker exec -it "factory_server" sh```

3. Inside the factory_server container run the migration command
```npx prisma migrate dev --name migration-name```

#### Helpful Commands

- lint repo
```npm run lint```

- format repo
```npm run prettier-format```

- start a local web server that serves the built solution from ./dist
```npm run preview```

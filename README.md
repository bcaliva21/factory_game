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

### Env setup

1. Clone the repo
```git clone https://github.com/bcaliva21/factory_game.git```

2. Enter repo
```cd factory_game```

3. Install Docker

### Front-end

1. Install frontend dependencies
```cd frontend && npm i```

2. Once dependencies are installed
```npm run dev```

### Back-end

1. Install backend dependencies
```cd server && npm i```

2. Generate prisma client locally
```npx prisma generate```

3. Sync prisma client with local schemas
```npx prisma migrate dev```

4. Build local files
```npm run build```

5. Start Back-end
```npm run serve``

#### Helpful Commands

- lint repo
```npm run lint```

- format repo
```npm run prettier-format```

- start a local web server that serves the built solution from ./dist
```npm run preview```

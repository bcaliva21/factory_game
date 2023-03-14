# Factory Game

> This repo is for a simple scroll timing game.

TODO:
- I figure making this is now worth it
- how to force game.over if a user enters no input
- finish incinerator designs
- any way for background-assets to not rerender on a correct user input?
- update DB on game.over
- setup user auth, from the research I've done, auth0 should be "easy"
- imlpement difficulty scaling
- implemmtn the animationTimings array in the drop animation
- UI for user login


## Development

1. Clone the repo
```git clone https://github.com/bcaliva21/factory_game.git```

2. Enter repo and install dependencies
```cd factory_game && npm i```

3. Install Docker

### Front-end

1. Once dependencies are installed
```npm run dev```

### Back-end

1. Spin up local db with docker
```docker-compose up -d```
    1a.  To seed the db with mock data from ./prisma/seed run ```npx prisma db seed```
    
> if you are getting prisma errors try the following commands in order. 
> ```docker-compose up -d```
>```npx prisma generate```
>```npx prisma migrate dev```
>```npx prisma db seed``` 

2. Build local files
```npm run build```

3. Start Back-end
```npm run serve``

#### Helpful Commands

- lint repo
```npm run lint```

- format repo
```npm run prettier-format```

- start a local web server that serves the built solution from ./dist
```npm run preview```

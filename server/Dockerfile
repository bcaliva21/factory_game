# setup env
FROM node:18-alpine
RUN npm install -g prisma

RUN mkdir /app
# Create app directory
WORKDIR /app

COPY . /app

RUN npm ci
# Generate prisma client, leave out if generating in `postinstall` script
RUN npx prisma generate
# expose port
EXPOSE 4000
# run server
CMD ["npm", "run", "serve-prod"]

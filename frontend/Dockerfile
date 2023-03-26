# Declare the base image
FROM node:18.15.0
RUN npm install -g npm@9.5.0
# Build step
# 1. copy package.json and package-lock.json to /app dir
RUN mkdir /app
# 2. Change working directory to newly created app dir
WORKDIR /app

COPY . /app
# 3 . Install dependencies
RUN npm i
# 5. Expose port 3000 on the container
EXPOSE 4173
# 6. Run the app
CMD ["npm", "run", "prod"]
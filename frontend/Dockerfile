# setup env
FROM node:18.15.0
# make dir
RUN mkdir /app
# nav to dir
WORKDIR /app
# copy project contents
COPY . /app
# install deps
# postinstall builds
ENV NODE_ENV=prod

RUN npm i
# expose port
EXPOSE 4173
# run prod
CMD ["npm", "run", "prod"]

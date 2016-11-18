# create a file named Dockerfile
FROM node:argon
# MongoDB
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
#RUN echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
#RUN apt-get update && apt-get install -y mongodb-org
# Node.JS APP
RUN mkdir /app
RUN npm install nodemon -g
RUN npm install express
RUN npm install mongoose
RUN npm install body-parser --save
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 3000
CMD ["npm", "start"]

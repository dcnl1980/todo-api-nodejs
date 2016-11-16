# create a file named Dockerfile
FROM node:argon
RUN mkdir /app
RUN npm install nodemon -g
RUN npm install express
RUN npm install mongoose
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]

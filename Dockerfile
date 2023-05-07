FROM node:8.1.3-alpine
WORKDIR /startwars-with-nest
COPY . .
RUN npm install
CMD ["npm run start:dev"]
EXPOSE 3000
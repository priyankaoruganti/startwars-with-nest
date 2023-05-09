FROM node:18-alpine as base
WORKDIR /startwars-with-nest
COPY ["package.json", "package-lock.json*", "./"]

FROM base as test
RUN npm ci
COPY . .
RUN npm run test

FROM base as prod
RUN npm ci --production
COPY . .
CMD ["npm", "run", "start:dev"]
EXPOSE 3000
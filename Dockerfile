FROM node:16.17.1

WORKDIR /db_project

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
COPY migrations/ ./migrations/

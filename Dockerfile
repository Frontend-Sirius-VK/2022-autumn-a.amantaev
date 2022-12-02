FROM node:16.17.1

WORKDIR /db_project

COPY package.json .
COPY package-lock.json .
RUN npm ci
# для сохранения зависимостей

COPY . .
# нужно так же скопировать deserialization.py, если он есть
# COPY deserialization.py .
COPY migrations/ ./migrations/

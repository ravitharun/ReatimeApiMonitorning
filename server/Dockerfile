FROM node:20-alpine

WORKDIR /lms

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]
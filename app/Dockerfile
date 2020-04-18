FROM node:latest as ionic

WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=ionic app/www /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

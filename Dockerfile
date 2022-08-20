FROM nginx:1.22-alpine

RUN ls && pwd
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
FROM nginx:alpine

EXPOSE 80

RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/start-nginx.sh /
COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

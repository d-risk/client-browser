FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/start-nginx.sh /
COPY ./dist /usr/share/nginx/html

CMD ["./start-nginx.sh"]

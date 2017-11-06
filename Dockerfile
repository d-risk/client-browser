FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/default.conf.template /etc/nginx/conf.d/
COPY ./dist /usr/share/nginx/html

CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
#CMD ["nginx", "-g", "daemon off;"]

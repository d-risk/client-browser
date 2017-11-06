FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/* /etc/nginx/nginx.conf
COPY ./nginx /
COPY ./dist /usr/share/nginx/html

CMD ["./start-nginx.sh"]
#CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
#CMD ["nginx", "-g", "daemon off;"]

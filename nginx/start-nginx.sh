#!/bin/sh

sed -i "s/listen\(\s\+\)\d\+;/listen\1${PORT};/" /etc/nginx/conf.d/default.conf
sed -i "s/server_name\(\s\+\)localhost;/server_name\1_;/" /etc/nginx/conf.d/default.conf
sed -i "s/user\(\s\+\)nginx;//" /etc/nginx/nginx.conf

cat /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"

#!/bin/sh

envsubst '${PORT}' < /default.conf.template > /etc/nginx/conf.d/default.conf
cp /nginx.conf /etc/nginx/nginx.conf
nginx

#!/bin/sh

sed -i "s/listen\(\s\+\)\d\+;/listen\1${PORT};/" /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"

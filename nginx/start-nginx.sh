#!/usr/bin/env bash

envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
nginx

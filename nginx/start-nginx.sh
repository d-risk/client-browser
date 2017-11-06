#!/bin/sh
FILE_DEFAULT=/etc/nginx/conf.d/default.conf
FILE_NGINX=/etc/nginx/nginx.conf

echo Updating listening port to ${PORT}
sed -i "s/listen\(\s\+\)\d\+;/listen\1${PORT};/" ${FILE_DEFAULT}
sed -i "s/server_name\(\s\+\)localhost;/server_name\1_;/" ${FILE_DEFAULT}
sed -i "s/user\(\s\+\)nginx;//" ${FILE_NGINX}

echo Contents of ${FILE_DEFAULT}
cat ${FILE_DEFAULT}
echo Contents of ${FILE_NGINX}
cat ${FILE_NGINX}

nginx -g "daemon off;"

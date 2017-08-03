#!/bin/sh
/bin/sed -i "s/<api_host_placeholder>/${API_SERVER}/" /etc/nginx/conf.d/default.conf && \
/bin/sed -i "s/<isv_host_placeholder>/${ISV_SERVER}/" /etc/nginx/conf.d/default.conf && \
nginx -g 'daemon off;'

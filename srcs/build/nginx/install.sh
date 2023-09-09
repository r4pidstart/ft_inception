#!/bin/bash

openssl req -x509 -nodes -days 30 -newkey rsa:2048 -keyout /etc/ssl/private/openssl.key -out /etc/ssl/certs/openssl.crt -subj "/C=KR/L=SEOUL/O=42seoul/OU=student/CN=tjo.42.fr"

nginx -g "daemon off;"

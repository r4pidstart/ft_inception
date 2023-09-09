#!/bin/bash

service mysql start

echo "CREATE USER '$db_user'@'%' IDENTIFIED BY '$db_pass';" | mysql
echo "GRANT ALL PRIVILEGES ON *.* TO '$db_user'@'%' IDENTIFIED BY '$db_pass';" | mysql
echo "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '$db_pass';" | mysql
echo "FLUSH PRIVILEGES;" | mysql
echo "CREATE DATABASE $db_name;" | mysql

kill $(cat /var/run/mysqld/mysqld.pid) 
mysqld

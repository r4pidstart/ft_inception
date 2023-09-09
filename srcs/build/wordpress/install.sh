#!/bin/bash

mkdir -p /var/www/html
cd /var/www/html

sleep 5

curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar

./wp-cli.phar core download --allow-root
mv /wp-config.php ./wp-config.php
rm /wp-config-sample.php

sed -i "s/db_name/$db_name/g" ./wp-config.php
sed -i "s/db_user/$db_user/g" ./wp-config.php
sed -i "s/db_pass/$db_pass/g" ./wp-config.php

./wp-cli.phar core install --url=$domain/ --title=$wp_title --admin_user=$wp_admin_name --admin_password=$wp_admin_pass --admin_email=$wp_admin_email --allow-root

./wp-cli.phar user create $wp_user_name $wp_user_email --role=author --user_pass=$wp_user_pass --allow-root

# bonus

sed -i 's/listen = \/run\/php\/php7.3-fpm.sock/listen = 9000/g' /etc/php/7.3/fpm/pool.d/www.conf
mkdir /run/php

chmod -R 777 /var/www/html
./wp-cli.phar plugin install redis-cache --activate --allow-root
./wp-cli.phar plugin update --all --allow-root
./wp-cli.phar redis enable --allow-root

/usr/sbin/php-fpm7.3 -F
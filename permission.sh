#!/usr/bin/env bash
sudo chown -R steve:www-data ./
sudo find ./ -type f -exec chmod 664 {} \;
sudo find ./ -type d -exec chmod 775 {} \;
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache
php artisan config:clear
composer dump-autoload
php artisan cache:clear

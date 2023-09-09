#!/bin/bash

service vsftpd start

adduser $ftp_user --disabled-password
echo "$ftp_user:$ftp_pass" | /usr/sbin/chpasswd
echo "$ftp_user" > /etc/vsftpd.userlist

mkdir -p /home/$ftp_user/ftp

chown nobody:nogroup /home/$ftp_user/ftp
chmod a-w /home/$ftp_user/ftp

mkdir /home/$ftp_user/ftp/files
chown $ftp_user:$ftp_user /home/$ftp_user/ftp/files

service vsftpd stop
/usr/sbin/vsftpd
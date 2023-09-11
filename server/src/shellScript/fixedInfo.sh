#!/bin/sh

#Host name
hName=`hostname`

#OS Release
osRelease=`cat /etc/os-release | grep VERSION=`

#Kernel version
KVersion=`uname -r`

#Disk Total
diskTotal=`df -P | grep -v ^Filesystem | awk '{sum += $2} END {print sum/1024/1024" GB"}'`

mySQL=`which mysql`
query="INSERT INTO monitoring.fixedInfo (id, host, osver, kernelver, totaldisk) VALUES (1, 'jjun-server', '22.04.3 LTS (Jammy Jellyfish)', '6.2.0-32-generic', '479')"

${mySQL} --login-path=root -e "${query}"
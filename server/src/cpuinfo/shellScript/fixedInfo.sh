#!/bin/sh

#Host name
hName=`hostname`

#OS Release
osRelease=`cat /etc/os-release | grep VERSION=`

#Kernel version
KVersion=`uname -r`

#Disk Total
diskTotal=`df -P | grep -v ^Filesystem | awk '{sum += $2} END {print sum/1024/1024" GB"}'`

mySQL=${which mysql}
query="INSERT INTO fixedInfo (host, osver, kernelver, totaldisk) VALUES (${hName}, ${osRelease}, ${KVersion}, ${diskTotal})"

${mySQL} - u root << EOF
    ${query}
EOF
#!/bin/sh

echo "{"
#Host name
hName=`hostname`
echo "\t\"hostName\"": \"${hName}\"

#OS Release
osRelease=`cat /etc/os-release | grep VERSION=`
echo "\t\"OSRelease\"": \"${osRelease}\"

#Kernel version
KVersion=`uname -r`
echo "\t\"kernelVersion\"": \"${KVersion}\"

#Server Uptime
upTime=`uptime -p`
echo "\t\"serverUptime\"": \"${upTime}\"

#Memory usage
memUsage=`free | awk '{if($1 == "Mem:") print(($2-$7)/$2*100)}'`
memAvail=`free | awk '{if($1 == "Mem:") print($7/$2*100)}'`
echo "\t\"memoryUsage(%)\"": $memUsage
echo "\t\"memoryAvailable(%)\"": $memAvail

#Disk usage
diskUsage=$(df --total | awk '/total/' | awk '{print $2, $3}' | awk '{print $2 / $1 * 100}')
diskTotal=`df -P | grep -v ^Filesystem | awk '{sum += $2} END {print sum/1024/1024" GB"}'`
echo "\t\"totalDiskSize(GB)\"": $diskTotal
echo "\t\"diskUsage(%)\"": $diskUsage

echo "}"
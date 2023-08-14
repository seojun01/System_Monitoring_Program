#!/bin/sh

echo "{"
#Host name
hName=`hostname`
echo "\t\"Host Name\"": \"${hName}\"

#Kernel version
KVersion=`uname -r`
echo "\t\"Kernel Version\"": \"${KVersion}\"

#Memory usage
memUsage=`free | awk '{if($1 == "Mem:") print(($2-$7)/$2*100)}'`
memAvail=`free | awk '{if($1 == "Mem:") print($7/$2*100)}'`
echo "\t\"Memory Usage(%)\"": $memUsage
echo "\t\"Memory Available(%)\"": $memAvail

#Cpu usage
cpuUsage=$(top -bn1 | awk '/Cpu/ {print $2}')
echo "\t\"CPU Usage(%)": $cpuUsage

#Cpu Temperature
cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp)
cpuTemp1=$(($cpuTemp0/1000))
cpuTemp2=$(($cpuTemp0/100))
cpuTempM=$(($cpuTemp2 % $cpuTemp1))
echo "\t\"CPU temp(C)\"": $cpuTemp1.$cpuTempM

#Disk usage
diskUsage=$(df --total | awk '/total/' | awk '{print $2, $3}' | awk '{print $2 / $1 * 100}')
diskTotal=`df -P | grep -v ^Filesystem | awk '{sum += $2} END {print sum/1024/1024" GB"}'`
echo "\t\"Total Disk Size(GB)\"": $diskTotal
echo "\t\"DISK Usage(%)\"": $diskUsage

echo "}"
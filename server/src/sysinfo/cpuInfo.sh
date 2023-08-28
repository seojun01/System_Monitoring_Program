#!/bin/sh

#Cpu usage
cpuUsage=$(top -bn1 | awk '/Cpu/ {print $2}')
echo "\t\"CPU Usage(%)": $cpuUsage

#Cpu Temperature
cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp)
cpuTemp1=$(($cpuTemp0/1000))
cpuTemp2=$(($cpuTemp0/100))
cpuTempM=$(($cpuTemp2 % $cpuTemp1))
cpuTemp=${cpuTemp1}.${cpuTempM}
echo "\t\"CPU temp(C)\"": $cpuTemp

mySQL=${which mysql}
query="INSERT INTO cpuInfo (_time, cpuUsage, cpuTemp) VALUES (curtime(), ${cpuUsage}, ${cpuTemp})"

${mySQL} -u root << EOF
    ${query}
EOF
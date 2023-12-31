#!/bin/sh

while true;
do
#Cpu usage
cpuUsage=$(top -bn1 | awk '/Cpu/ {print $2}')

#Cpu Temperature
cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp)
cpuTemp1=$(($cpuTemp0/1000))
cpuTemp2=$(($cpuTemp0/100))
cpuTempM=$(($cpuTemp2 % $cpuTemp1))
cpuTemp=${cpuTemp1}.${cpuTempM}

mySQL=`which mysql`
query="INSERT INTO monitoring.cpuInfo (_time, cpuUsage, cpuTemp) VALUES (curtime(), ${cpuUsage}, ${cpuTemp})"

echo "cpuUsage : " ${cpuUsage} ", cpuTemp : " ${cpuTemp}	
${mySQL} --login-path=root -e "${query}"
sleep 1;
done;

ps -aux --sort -pcpu | head -n 11 | awk '{print $3}'
#!/bin/sh

#Cpu usage
cpuUsage=$(top -bn1 | awk '/Cpu/ {print $2}')

#Cpu Temperature
cpuTemp0=$(cat /sys/class/thermal/thermal_zone0/temp)
cpuTemp1=$(($cpuTemp0/1000))
cpuTemp2=$(($cpuTemp0/100))
cpuTempM=$(($cpuTemp2 % $cpuTemp1))
cpuTemp=${cpuTemp1}.${cpuTempM}


#Insert Data
mySQL=`which mysql`
query="INSERT INTO monitoring.cpuInfo (_time, cpuUsage, cpuTemp) VALUES (curtime(), ${cpuUsage}, ${cpuTemp})"

${mySQL} --login-path=root -e "${query}"

#INSERT Data into Database using EOF
#<< EOF
#    ${query}
#EOF
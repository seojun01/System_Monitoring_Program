#!/bin/sh

while true;
do
#Server Uptime
upTime=`uptime -p | awk -F "up " '{print $2}'`

#Memory usage
memUsage=$(free | awk '{if($1 == "Mem:") print(($2-$7)/$2*100)}')
memAvail=$(free | awk '{if($1 == "Mem:") print($7/$2*100)}')

#Disk usage
diskUsage=$(df --total | awk '/total/' | awk '{print $2, $3}' | awk -F " " '{print substr($2/$1*100, 1,1)}')

mySQL=`which mysql`
query="INSERT INTO monitoring.variableInfo (uptime, memusage, memavail, diskusage) VALUES ('${upTime}', '${memUsage}', '${memAvail}', '${diskUsage}')"

echo "Uptime : " ${upTime} ", memUasge : " ${memUsage} ", memAvail : " ${memAvail} ", diskUsage : " ${diskUsage} 
${mySQL} --login-path=root -e "${query}"
sleep 1;
done;
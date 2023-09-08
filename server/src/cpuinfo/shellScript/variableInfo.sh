#!/bin/sh

#Server Uptime
upTime=`uptime -p`

#Memory usage
memUsage=`free | awk '{if($1 == "Mem:") print(($2-$7)/$2*100)}'`
memAvail=`free | awk '{if($1 == "Mem:") print($7/$2*100)}'`

#Disk usage
diskUsage=$(df --total | awk '/total/' | awk '{print $2, $3}' | awk '{print $2 / $1 * 100}')

mySQL=${which mysql}
query="INSERT INTO monitoring.variableInfo (uptime, memusage, memavail, diskusage) VALUES (${upTime}, ${memUsage}, ${memAvail}, ${diskUsage})"

${mySQL} --login-path=root -e "${query}"
#!/bin/sh

#echo "시간 : 수신(Kbps) / 송신(Kbps)    Connection"
rx1=`cat /proc/net/dev | grep eth0 | awk -F: '{print $2}' | awk '{print $1}'`
tx1=`cat /proc/net/dev | grep eth0 | awk -F: '{print $2}' | awk '{print $9}'`
rx2=`cat /proc/net/dev | grep eth0 | awk -F: '{print $2}' | awk '{print $1}'`
tx2=`cat /proc/net/dev | grep eth0 | awk -F: '{print $2}' | awk '{print $9}'`
conn=`netstat -n | grep EST | wc -l`

# 1024/8 == 128
delay=1
rx3=$((($rx2-$rx1)*8/1024/$delay))
tx3=$((($tx2-$tx1)*8/1024/$delay))

#echo "`date '+%k:%M:%S'` : $rx3 / $tx3        $conn"

mySQL=${which mysql}
query="INSERT INTO traffic (_time, reception, send, conn) VALUES (curtime(), ${rx3}, ${tx3}, ${conn})"

${mySQL} -u root << EOF
    ${query}
EOF

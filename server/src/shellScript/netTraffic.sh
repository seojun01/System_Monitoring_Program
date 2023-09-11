#!/bin/sh

rx1=`cat /proc/net/dev | grep enp1s0 | awk -F: '{print $2}' | awk '{print $1}'`
tx1=`cat /proc/net/dev | grep enp1s0 | awk -F: '{print $2}' | awk '{print $9}'`
rx2=`cat /proc/net/dev | grep enp1s0 | awk -F: '{print $2}' | awk '{print $1}'`
tx2=`cat /proc/net/dev | grep enp1s0 | awk -F: '{print $2}' | awk '{print $9}'`

conn=`netstat -n | grep EST | wc -l`

delay=1
rx3=$((($rx2-$rx1)*8/1024))
tx3=$((($tx2-$tx1)*8/1024))

mySQL=`which mysql`
query="INSERT INTO monitoring.traffic (_time, reception, send, conn) VALUES (curtime(), ${rx3}, ${tx3}, ${conn})"

${mySQL} --login-path=root -e "${query}"
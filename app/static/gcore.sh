
#!/bin/bash

GCORE_DIR=/Users/xiaopingguo/repos/my_repos/node-debug/app/static

cd $GCORE_DIR

# 开启 Core Dump
ulimit -c unlimited
ulimit -c

node_pid=`pgrep -n node`
sudo gcore -o "core.node.${node_pid}" ${node_pid}

echo "core.node.${node_pid} 已经生成" 
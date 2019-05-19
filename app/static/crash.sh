
#!/bin/bash

GCORE_DIR=/Users/xiaopingguo/repos/my_repos/node-debug/app/static
JS_PATH=/Users/xiaopingguo/repos/my_repos/node-debug/app/mem/crash.js

# 开启 Core Dump
ulimit -c unlimited
ulimit -c
cd $GCORE_DIR

node --abort-on-uncaught-exception ${JS_PATH}



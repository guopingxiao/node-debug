#!/bin/bash

V8_RESULT_DIR=/Users/xiaopingguo/repos/my_repos/node-debug/app/result
PROFILE_FILE=/Users/xiaopingguo/repos/my_repos/node-debug/app/result/v8-profiler.cpuprofile

cd ${V8_RESULT_DIR}
# 查看执行时间大于 200ms 的函数
va timeout ${PROFILE_FILE} 200 --only

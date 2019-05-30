#!/bin/bash

V8_RESULT_DIR=/Users/xiaopingguo/repos/my_repos/node-debug/app/static
PROFILE_FILE=/Users/xiaopingguo/repos/my_repos/node-debug/app/static/v8-profiler.cpuprofile

cd ${V8_RESULT_DIR}

# 将 cpuprofile 文件生成 svg 文件
flamegraph -t cpuprofile -f ${PROFILE_FILE} -o cpuprofile.svg

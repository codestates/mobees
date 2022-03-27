#!/bin/bash
cd /home/ubuntu/mobees/server

export DATABASE_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USERNAME --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')

export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export GITHUB_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names GITHUB_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export GITHUB_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names GITHUB_CLIENT_SECRET --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start index.js


# sleep 10s && pm2 status # pm2동작을 확인 - 제대로 작동했는지, codedeploy ->로그 확인
# echo $DATABASE_HOST     # 환경변수에 DATABASE_HOST의 값이 무엇인지 확인
# node check.js           # 만드신 check.js의 로그가 자동화 과정에서는 어떤 console.log를 보여주는지 확인
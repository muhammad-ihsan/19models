#!/bin/bash

git archive --format tar.gz --output upload.tar.gz HEAD
scp upload.tar.gz adams@159.89.28.72:~
rm upload.tar.gz

ssh adams@159.89.28.72 << 'ENDSSH'
pm2 stop models19
rm -rf api-19models
mkdir api-19models
tar xf upload.tar.gz -C api-19models
rm upload.tar.gz
cd api-19models
npm i
pm2 start models19
ENDSSH

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'commit'

# if you are deploying to https://pingdori.github.io
# git push -f git@github.com:pingdori/pingdori.github.io.git main

# if you are deploying to https://pingdori.github.io/Vue3Training/week-6
 git push -f https://github.com/pingdori/vue-week-7.git main:origin

cd -

#!/bin/bash
BUILD_FOLDER="website/build/chidori/"
CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`
if [ $CURRENT_BRANCH != "master" ]; then
  echo "Checking out to master branch"
  git checkout master
fi

git pull
npm --prefix website run build
git add -f $BUILD_FOLDER && git commit -am "publishing docs"
git push origin `git subtree split --prefix $BUILD_FOLDER master`:gh-pages --force
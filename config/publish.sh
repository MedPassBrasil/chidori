#!/bin/bash

git checkout master
git pull
git checkout gh-pages
git merge master  --strategy-option theirs
npm --prefix website run build
git add -f website/build/chidori/ && git ci -am "publishing docs"
git subtree push --prefix website/build/chidori/ origin gh-pages
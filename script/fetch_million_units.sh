#!/usr/bin/env bash

if [ ! -d dist ]; then
  echo "dist directory not found!"
  echo "Make dist directory."
  mkdir dist
fi

curl -o "./dist/million-units.html" "https://dic.pixiv.net/a/ミリオンライブユニット"

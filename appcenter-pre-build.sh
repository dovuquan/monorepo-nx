#!/usr/bin/env bash
echo "PRE BUILD SCRIPTS !!!"
echo $APPCENTER_BRANCH
echo $APPCENTER_XCODE_PROJECT
echo $APPCENTER_SOURCE_DIRECTORY
echo $APPCENTER_REACTNATIVE_PACKAGE

cd apps/mobile-app
yarn install
ls -a
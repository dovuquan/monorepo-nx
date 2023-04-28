#!/usr/bin/env bash
echo "PRE BUILD SCRIPTS !!!"
echo $APPCENTER_BRANCH
echo $APPCENTER_XCODE_PROJECT
echo $APPCENTER_SOURCE_DIRECTORY
echo $APPCENTER_REACTNATIVE_PACKAGE

ls -a
cd ../.. && yarn install
cd apps/grow-today
ls -a
# if [[ $APP_PLATFORM = 'ios' ]]
# then
#     ls -a
#     cd ../.. && yarn install
#     cd apps/GrowToday
#     ls -a
# fi
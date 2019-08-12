#!/bin/bash

set -e

npm rebuild node-sass
gulp test

if [ ${CI_BRANCH} == "master" ]; then
    gulp protractor:dist
else
    gulp protractor
fi

set +e

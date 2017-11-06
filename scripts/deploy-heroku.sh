#!/bin/bash
set -e

DOCKER_REPO="drisktech/`basename ${TRAVIS_REPO_SLUG}`"
echo DOCKER_REPO="'${DOCKER_REPO}'"
echo TRAVIS_BRANCH="'${TRAVIS_BRANCH}'";
echo TRAVIS_BUILD_NUMBER="'${TRAVIS_BUILD_NUMBER}'";
echo TRAVIS_TAG="'${TRAVIS_TAG}'";
ng build --prod
if [ -z "${TRAVIS_TAG}" ]; then
  DOCKER_IMAGE=${DOCKER_REPO}:${TRAVIS_BRANCH}-SNAPSHOT-${TRAVIS_BUILD_NUMBER}
  docker build -t ${DOCKER_IMAGE} .;
else
  DOCKER_IMAGE=${DOCKER_REPO}:${TRAVIS_TAG}
  docker build -t ${DOCKER_IMAGE} -t ${DOCKER_REPO}:latest .;
fi
docker login --username=_ --password=${HEROKU_API_KEY} registry.heroku.com
docker tag ${DOCKER_IMAGE} registry.heroku.com/${HEROKU_APP_NAME}/web
docker push registry.heroku.com/${HEROKU_APP_NAME}/web

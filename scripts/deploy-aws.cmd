#!/bin/bash
set -e

echo TRAVIS_REPO_SLUG="'${TRAVIS_REPO_SLUG}'"
echo TRAVIS_BRANCH="'${TRAVIS_BRANCH}'"
echo TRAVIS_BUILD_NUMBER="'${TRAVIS_BUILD_NUMBER}'"
echo TRAVIS_TAG="'${TRAVIS_TAG}'"

AWS_REPO="268927183565.dkr.ecr.ap-southeast-1.amazonaws.com/d-risk/web-client"
IMAGE_VERSION=$(( -z "${TRAVIS_TAG}" ? ${TRAVIS_BRANCH}-SNAPSHOT-${TRAVIS_BUILD_NUMBER} : ${TRAVIS_TAG} ))
BUILD_IMAGE=${TRAVIS_REPO_SLUG}:${IMAGE_VERSION}

ng build --prod
chmod +x ./nginx/start-nginx.sh

aws ecr get-login --no-include-email --region ap-southeast-1
docker build -t ${BUILD_IMAGE} .
docker tag ${BUILD_IMAGE} ${AWS_REPO}:${IMAGE_VERSION} ${AWS_REPO}:latest
docker push ${AWS_REPO}:${IMAGE_VERSION} ${AWS_REPO}:latest

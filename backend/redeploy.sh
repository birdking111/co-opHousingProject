#! /bin/bash

IMAGE="ldp/new-image-name-here"

# Move to the location of the script
cd "$(dirname "$0")"

# Remove the currently running container for the image
docker ps | grep $IMAGE | awk '{print $1}' | xargs docker rm -f

# Remove the image itself
docker images | grep $IMAGE | awk '{print $3}' | xargs docker rmi

# Build the new version of this image
echo 'The image is building...'
docker build -q -t $IMAGE .

# Run this image
docker run -p 8080:8080 -d $IMAGE

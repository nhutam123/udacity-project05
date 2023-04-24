#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# Create dockerpath
# dockerpath=<your docker ID/path>
dockerpath=tamln2/my-project05

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker login -u tamln2
docker tag my-project05 $dockerpath:latest

# Step 3:
# Push image to a docker repository
  
docker push $dockerpath:latest

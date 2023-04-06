#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Step 1:
# build images from docker-compose.
docker-compose build
# Step 2:  
# Authenticate 
docker login -u tamln2
# Step 3:
# upload
docker-compose push

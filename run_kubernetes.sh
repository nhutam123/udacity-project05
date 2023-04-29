#!/usr/bin/env bash

# This tags and uploads an image to Docker Hub

# Step 1:
# This is your Docker ID/path
dockerpath=tamln2/my-project05:latest

# Step 2
# Run the Docker Hub container with kubernetes
kubectl run my-project05 --image=$dockerpath --port=8080

# Step 3:
# List kubernetes pods
kubectl get pods

# Step 4:
# Forward the container port to a host
kubectl port-forward my-project 8080:80

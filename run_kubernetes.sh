#!/usr/bin/env bash

# This tags and uploads an image to Docker Hub

# Step 1:
# This is your Docker ID/path
dockerpath1=tamln2/frontend:latest
dockerpath2=tamln2/backend:latest
# Step 2
# Run the Docker Hub container with kubernetes
echo tamln2
kubectl run frontend --image=$dockerpath1 --port=3000
kubectl run backend --image=$dockerpath2 --port=8080

# Step 3:
# List kubernetes pods
echo tamln3
kubectl get pods

# Step 4:
# Forward the container port to a host
kubectl port-forward frontend 3000:3000

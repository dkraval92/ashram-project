#!/bin/bash
echo "Updating system and installing Docker..."
sudo apt update -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

echo "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "Starting the 3-Tier Application..."
sudo docker-compose up -d --build
echo "Deployment Complete! Open your EC2 Public IP in the browser."

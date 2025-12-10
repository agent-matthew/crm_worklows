#!/bin/bash
echo "Starting Build Process..."

# Create a virtual environment inside the /app directory (which persists)
echo "Creating virtual environment..."
python3 -m venv .venv

# Activate it
source .venv/bin/activate

# Upgrade pip just in case
pip install --upgrade pip

# Install requirements INT0 the virtual environment
echo "Installing dependencies..."
pip install -r requirements.txt

echo "Build Complete. Dependencies installed in .venv"

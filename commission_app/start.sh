#!/bin/bash
# Add the local user scripts path (where gunicorn is installed) to PATH
export PATH=$PATH:$(python3 -c 'import sysconfig; print(sysconfig.get_path("scripts"))')

# Run the application
gunicorn --bind 0.0.0.0:8080 main:app

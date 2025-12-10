#!/bin/bash
#!/bin/bash
echo "Starting Application..."

# 1. Activate the virtual environment we created in build.sh
if [ -f ".venv/bin/activate" ]; then
    echo "Activating virtual environment..."
    source .venv/bin/activate
else
    echo "CRITICAL: .venv not found. Did the build step run 'sh build.sh'?"
    exit 1
fi

# 2. Run Gunicorn directly from the venv
echo "Running Gunicorn..."
gunicorn --bind 0.0.0.0:8080 main:app

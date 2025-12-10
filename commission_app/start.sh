#!/bin/bash
#!/bin/bash
echo "Starting application boot sequence..."

# 1. Try to find gunicorn explicitly
GUNICORN_PATH=$(which gunicorn)

if [ -z "$GUNICORN_PATH" ]; then
    echo "gunicorn not in PATH. Searching known locations..."
    
    # Check common places
    if [ -f "/usr/local/bin/gunicorn" ]; then
        GUNICORN_PATH="/usr/local/bin/gunicorn"
    elif [ -f "/usr/bin/gunicorn" ]; then
        GUNICORN_PATH="/usr/bin/gunicorn"
    elif [ -f "/home/apprunner/.local/bin/gunicorn" ]; then
         GUNICORN_PATH="/home/apprunner/.local/bin/gunicorn"
    # Inspect python sysconfig for scripts folder
    else
         PYTHON_SCRIPTS=$(python3 -c 'import sysconfig; print(sysconfig.get_path("scripts"))')
         if [ -f "$PYTHON_SCRIPTS/gunicorn" ]; then
             GUNICORN_PATH="$PYTHON_SCRIPTS/gunicorn"
         fi
    fi
fi

if [ -z "$GUNICORN_PATH" ]; then
    echo "CRITICAL: Could not find gunicorn executable."
    echo "Debugging: Listing pip installed files for gunicorn:"
    python3 -m pip show -f gunicorn
    exit 1
fi

echo "Found gunicorn at: $GUNICORN_PATH"
$GUNICORN_PATH --bind 0.0.0.0:8080 main:app

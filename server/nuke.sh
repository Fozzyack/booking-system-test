#!/bin/bash

rm -rf ./db.sqlite3
rm -rf ./bookings/migrations/
rm -rf ./rooms/migrations/
rm -rf ./user_auth/migrations/
rm -rf ./rooms-images/*.jpg

# Create migrations for user_auth first (required before other models)
poetry run python manage.py makemigrations user_auth
poetry run python manage.py makemigrations bookings
poetry run python manage.py makemigrations rooms 
poetry run python manage.py migrate

# Create superuser non-interactively
echo "Creating superuser (username: admin, password: admin)..."
DJANGO_SUPERUSER_PASSWORD=admin poetry run python manage.py createsuperuser \
  --noinput \
  --username admin \
  --email admin@example.com

echo "Database reset complete!"
echo "Superuser credentials: admin / admin"
poetry run python manage.py runserver &
SERVER_PID=$!

sleep 3

./test-upload.sh

kill $SERVER_PID

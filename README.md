# Coworking Space Booking System

A modern, full-stack booking system for coworking spaces, built with Next.js and Django REST Framework.

> **Note**: This is a test project created to explore and experiment with various technologies. It is not a production-ready application.

## Overview

This application provides a streamlined interface for browsing and booking coworking spaces. Users can search and filter through available rooms, view detailed information with tags (like High-Speed WiFi, Meeting Rooms, Quiet Zones), and make reservations. The system features a responsive React/Next.js frontend communicating with a Django REST API backend.

## Tech Stack

### Frontend (`/client`)
- **Next.js** 16.0.5 with App Router
- **React** 19.2.0
- **TypeScript** 5
- **Tailwind CSS** 4
- **Lucide React** - Icon library
- **Bun** - JavaScript runtime & package manager

### Backend (`/server`)
- **Django** 5.2.8
- **Django REST Framework** 3.16.1
- **Python** 3.13+
- **SQLite** - Database (default)
- **Pillow** - Image processing
- **django-cors-headers** - CORS support
- **Poetry** - Dependency management

## Project Structure

```
bloom-test/
├── client/                    # Next.js frontend
│   ├── app/                   # App router pages
│   │   ├── page.tsx          # Main landing/search page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/            # React components
│   │   ├── BookingModal.tsx  # Booking interface
│   │   ├── RoomCard.tsx      # Room display card
│   │   ├── SearchBar.tsx     # Search functionality
│   │   ├── FilterSection.tsx # Tag filters
│   │   ├── DateFilter.tsx    # Date selection
│   │   └── SpacesAvailable.tsx # Room grid display
│   └── lib/                   # Utilities and types
│       ├── types.ts          # TypeScript interfaces
│       └── constants.ts      # API endpoints & config
│
├── server/                    # Django backend
│   ├── rooms/                # Rooms app
│   │   ├── models.py         # Room & TagItem models
│   │   ├── views.py          # ViewSets for API
│   │   ├── serializer.py     # DRF serializers
│   │   └── urls.py           # Room routes
│   ├── bookings/             # Bookings app
│   │   ├── models.py         # Booking model
│   │   ├── views.py          # Booking ViewSet
│   │   ├── serializers.py    # Booking serializers
│   │   └── urls.py           # Booking routes
│   ├── server/               # Project settings
│   │   ├── settings.py       # Django configuration
│   │   └── urls.py           # Root URL config
│   ├── rooms-images/         # Uploaded room images
│   └── manage.py             # Django CLI
│
└── testimages/               # Sample room images
```

## Prerequisites

- **Node.js** 20.x or higher
- **Bun** (or npm/yarn/pnpm)
- **Python** 3.13 or higher
- **Poetry** 1.8+

## Getting Started

### 1. Backend Setup

Navigate to the server directory and set up the Django backend:

```bash
cd server

# Install dependencies
poetry install

# Activate virtual environment
poetry shell

# Run database migrations
python manage.py migrate

# (Optional) Create a superuser for admin access
python manage.py createsuperuser

# Start the development server
python manage.py runserver
```

The API will be available at `http://localhost:8000`

**Available API Endpoints:**
- `GET /rooms/` - List all rooms
- `POST /rooms/` - Create a new room
- `GET /rooms/{id}/` - Get room details
- `GET /tags/` - List all tags
- `GET /bookings/` - List all bookings
- `POST /bookings/` - Create a booking

### 2. Frontend Setup

In a new terminal, navigate to the client directory:

```bash
cd client

# Install dependencies
bun install

# Start the development server
bun dev
```

The application will be available at `http://localhost:3000`

### 3. (Optional) Seed Data

#### Quick Reset & Populate with Scripts

The server directory includes utility scripts for quickly resetting and populating the database:

**Reset Database (`nuke.sh`)**

```bash
cd server
./nuke.sh
```

This script will:
- Delete the SQLite database
- Remove all migration files
- Create fresh migrations for rooms and bookings apps
- Run migrations
- Create a superuser (username: `admin`, password: `admin`)

**Populate Test Data (`test-upload.sh`)**

After running `nuke.sh`, start the server and populate it with sample rooms:

```bash
# In terminal 1: Start the server
poetry run python manage.py runserver

# In terminal 2: Upload test data
cd server
./test-upload.sh
```

This will create 9 sample rooms with images and random tags. Requires the server to be running and uses the admin credentials created by `nuke.sh`.

**Alternative: Manual Data Entry**

You can also populate the database using the Django admin interface at `http://localhost:8000/admin`.

## API Integration

The frontend communicates with the backend through the configured API base URL (`http://localhost:8000` by default). This can be customized via the `NEXT_PUBLIC_API_URL` environment variable in the client.

Key API integration points:
- Room fetching: `client/app/page.tsx:25-38`
- API constants: `client/lib/constants.ts:1-6`

## Features

### Implemented
- Browse available coworking spaces with image display
- Real-time search functionality
- Filter rooms by tags (High-Speed WiFi, Meeting Rooms, Quiet Zones, etc.)
- Date filtering for availability
- Responsive design for mobile and desktop
- Room details with tags and descriptions
- Booking modal interface

### Data Models

**Room** - Represents a bookable space
- Name, description, image
- Associated tags (many-to-many via TagItem)
- Timestamps

**TagItem** - Feature tags for rooms
- Tag name (e.g., "High-Speed Wifi", "Pet Friendly")
- Foreign key to Room

**Booking** - Reservation records
- Room reference, visitor info (name, email)
- Start/end datetime
- Status (Pending, Approved, Cancelled)
- Optional cancellation reason

## Development

### Frontend Commands

```bash
bun dev          # Start dev server (http://localhost:3000)
bun build        # Create production build
bun start        # Start production server
bun lint         # Run ESLint
```

### Backend Commands

```bash
python manage.py runserver        # Start dev server
python manage.py makemigrations   # Create new migrations
python manage.py migrate          # Apply migrations
python manage.py createsuperuser  # Create admin user
python manage.py shell            # Django shell
```

### Admin Panel

Access the Django admin at `http://localhost:8000/admin` to manage:
- Rooms and their properties
- Tags and categorization
- Bookings and their status

## Configuration

### Environment Variables (Frontend)

Create a `.env.local` file in the `client/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### CORS Configuration

The backend is configured to accept requests from `http://localhost:3000` by default. To modify this, edit `server/server/settings.py:106-108`.

## Media Files

Room images are stored in `server/rooms-images/`. The backend serves these files in development mode via Django's static file handling.

## Database

The project uses SQLite by default (`server/db.sqlite3`). For production, consider migrating to PostgreSQL or another robust database system.

## License

This project is for educational and testing purposes.



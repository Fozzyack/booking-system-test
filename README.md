# Coworking Space Booking System

A modern, full-stack booking system for coworking spaces, built with Next.js and Django REST Framework.

> **Note**: This is a test project created to explore and experiment with various technologies. It is not a production-ready application.

## Features

### Implemented
- **Browse & Search**: View all available coworking spaces with real-time search functionality
- **Advanced Filtering**: Filter rooms by tags (High-Speed WiFi, Meeting Rooms, Quiet Zones, etc.)
- **Date-Based Availability**: Filter rooms by date (backend endpoint ready for integration)
- **Room Details**: Detailed room pages with capacity, type, description, and amenities
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Image Management**: Upload and display room images
- **REST API**: Full CRUD operations for rooms and bookings

### In Progress
- Booking flow completion
- Date-based availability filtering (frontend integration)
- Location services integration

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
booking-system-test/
├── client/                       # Next.js frontend
│   ├── app/                      # App router pages
│   │   ├── rooms/
│   │   │   └── [room_id]/
│   │   │       └── page.tsx      # Dynamic room details page
│   │   ├── page.tsx              # Main landing/search page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/               # React components
│   │   ├── DateFilter.tsx        # Date selection component
│   │   ├── FilterSection.tsx     # Tag filter UI
│   │   ├── Header.tsx            # Site header
│   │   ├── RoomCard.tsx          # Room display card with booking link
│   │   ├── SearchBar.tsx         # Real-time search
│   │   ├── SpacesAvailable.tsx   # Room grid with filtering logic
│   │   └── TagsList.tsx          # Tags display component
│   ├── lib/                      # Utilities and types
│   │   ├── types.ts              # TypeScript interfaces
│   │   └── constants.ts          # API endpoints & config
│   └── public/                   # Static assets
│
├── server/                       # Django backend
│   ├── rooms/                    # Rooms app
│   │   ├── models.py             # Rooms, TagItem, RoomType models
│   │   ├── views.py              # RoomViewSet, TagViewSet, RoomTypeViewSet
│   │   ├── serializer.py         # DRF serializers
│   │   ├── urls.py               # Room API routes
│   │   └── migrations/           # Database migrations
│   ├── bookings/                 # Bookings app
│   │   ├── models.py             # Booking model with status choices
│   │   ├── views.py              # BookingViewSet
│   │   ├── serializers.py        # Booking serializers
│   │   ├── urls.py               # Booking API routes
│   │   └── migrations/           # Database migrations
│   ├── server/                   # Django project settings
│   │   ├── settings.py           # Configuration (CORS, media files, etc.)
│   │   ├── urls.py               # Root URL config
│   │   ├── wsgi.py               # WSGI config
│   │   └── asgi.py               # ASGI config
│   ├── rooms-images/             # Uploaded room images (gitignored)
│   ├── testimages/               # Sample images for testing
│   ├── manage.py                 # Django management CLI
│   ├── pyproject.toml            # Poetry dependencies
│   ├── nuke.sh                   # Database reset script
│   └── test-upload.sh            # Test data upload script
│
├── package.json                  # Root package.json
└── README.md                     # This file
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

**Rooms**
- `GET /rooms/` - List all rooms with tags and room types
- `POST /rooms/` - Create a new room (requires authentication)
- `GET /rooms/{id}/` - Get detailed room information
- `PUT/PATCH /rooms/{id}/` - Update room details (requires authentication)
- `DELETE /rooms/{id}/` - Delete a room (requires authentication)
- `GET /rooms/free-on/?date={ISO_DATE}` - Get rooms available on a specific date

**Tags**
- `GET /tags/` - List all tags
- `POST /tags/` - Create a new tag
- `GET /tags/{id}/` - Get tag details

**Room Types**
- `GET /room-types/` - List all room types
- `POST /room-types/` - Create a new room type
- `GET /room-types/{id}/` - Get room type details

**Bookings**
- `GET /bookings/` - List all bookings
- `POST /bookings/` - Create a new booking
- `GET /bookings/{id}/` - Get booking details
- `PUT/PATCH /bookings/{id}/` - Update booking (e.g., change status)
- `DELETE /bookings/{id}/` - Cancel/delete a booking

**Authentication**
- `GET /auth-api/` - Django REST Framework authentication endpoints

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
- Room fetching on homepage: `client/app/page.tsx:25-40`
- Room detail fetching: `client/app/rooms/[room_id]/page.tsx:26-40`
- API constants: `client/lib/constants.ts`
- TypeScript types: `client/lib/types.ts`

### CORS Configuration

The backend is configured to accept requests from `http://localhost:3000` by default (`server/server/settings.py:106-108`). Additional origins can be added to the `CORS_ALLOWED_ORIGINS` list.

## Architecture

### Frontend Architecture
- **Next.js 16** with App Router for file-based routing
- **Server Components** for initial data fetching on room detail pages
- **Client Components** for interactive features (search, filtering)
- **TypeScript** for type safety across the application
- **Tailwind CSS** for responsive utility-first styling
- **Lucide React** for consistent iconography

### Backend Architecture
- **Django REST Framework** ViewSets for RESTful API endpoints
- **Model-Serializer-ViewSet** pattern for clean separation of concerns
- **SQLite** database for development (easily swappable for production databases)
- **Token Authentication** ready via DRF (currently allowing unauthenticated reads)
- **CORS middleware** for secure cross-origin requests
- **Media file handling** for room image uploads

### Data Models

**Rooms** (`server/rooms/models.py:4-15`)
- `name` - Room name (max 30 chars)
- `excerpt` - Short description (max 100 chars)
- `description` - Full description (max 500 chars)
- `image` - Room image upload
- `good_for` - Category label (max 20 chars)
- `capacity` - Maximum number of guests
- `created_at` / `updated_at` - Timestamps

**RoomType** (`server/rooms/models.py:18-21`)
- `type` - Room type name (max 20 chars)
- `room` - One-to-one relationship with Rooms

**TagItem** (`server/rooms/models.py:24-30`)
- `tag` - Feature tag name (max 20 chars, e.g., "High-Speed Wifi", "Pet Friendly")
- `room` - Foreign key to Rooms (many-to-one relationship)

**Bookings** (`server/bookings/models.py:13-27`)
- `room_id` - Foreign key to Rooms
- `visitor_name` - Guest name (max 32 chars)
- `visitor_email` - Guest email (max 64 chars)
- `start_datetime` / `end_datetime` - Booking time period
- `cancel_reason` - Optional cancellation reason
- `status` - Booking status (Pending, Approved, Cancelled)
- `created_at` / `updated_at` - Timestamps

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

### Environment Variables

**Frontend** (Optional)

Create a `.env.local` file in the `client/` directory to override the default API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

If not set, the frontend will use `http://localhost:8000` as defined in `client/lib/constants.ts`.

**Backend**

The Django `SECRET_KEY` is currently hardcoded for development. For production:
1. Generate a new secret key: `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
2. Set it as an environment variable
3. Update `server/server/settings.py` to read from the environment

## Media Files

Room images are uploaded to `server/rooms-images/` and served at `/rooms-images/` in development mode via Django's media file handling (`server/server/settings.py:130-131`). The directory is gitignored to avoid committing uploaded files.

## Database

The project uses SQLite by default (`server/db.sqlite3`). For production, consider migrating to PostgreSQL or another robust database system by updating the `DATABASES` setting in `server/server/settings.py:80-85`.

## Utility Scripts

### Database Reset (`server/nuke.sh`)
Completely resets the development database:
- Deletes `db.sqlite3`
- Removes all migration files (except `__init__.py`)
- Creates fresh migrations
- Applies migrations
- Creates a superuser with credentials: `admin` / `admin`

**Usage:**
```bash
cd server
./nuke.sh
```

### Test Data Upload (`server/test-upload.sh`)
Populates the database with sample rooms using the testimages:
- Uploads 9 sample rooms with images from `server/testimages/`
- Assigns random tags and room types
- Requires the Django server to be running
- Uses admin authentication

**Usage:**
```bash
# Terminal 1: Start the server
cd server
poetry run python manage.py runserver

# Terminal 2: Upload test data
cd server
./test-upload.sh
```

## Known Issues & Future Improvements

### Frontend
- Date filter UI is present but not yet integrated with backend availability endpoint
- Booking flow needs completion (currently links to room detail page)
- Location services placeholder on room detail pages
- Image optimization could be improved

### Backend
- Date-based availability endpoint (`/rooms/free-on/`) implemented but needs booking conflict logic
- Authentication is configured but not enforced on most endpoints
- No pagination on list endpoints yet
- SECRET_KEY should be moved to environment variables

### Potential Enhancements
- User authentication and profiles
- Advanced booking management (edit, cancel with reasons)
- Email notifications for bookings
- Room availability calendar view
- Payment integration
- Reviews and ratings system
- Admin dashboard improvements
- Unit and integration tests

## Contributing

This is a test project for learning purposes. Feel free to fork and experiment!

## License

This project is for educational and testing purposes.


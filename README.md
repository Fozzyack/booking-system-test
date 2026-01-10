# Coworking Space Booking System

A modern, full-stack booking system for coworking spaces, built with Next.js and Django REST Framework.

> [!IMPORTANT]
> This is a test project created to explore and experiment with various technologies. It is not a production-ready application.

![Current Frontpage](./assets/RoomCards.png)
![Individual Room Page](./assets/IndividualRoomPage.png)

## Features

### Implemented
- **Browse & Search**: View all available coworking spaces with real-time search functionality
- **Advanced Filtering**: Filter rooms by tags (High-Speed WiFi, Meeting Rooms, Quiet Zones, etc.)
- **Date-Based Availability**: Filter rooms by date (backend endpoint ready for integration)
- **Room Details**: Detailed room pages with capacity, type, description, and amenities
- **Booking Interface**: Time slot selection and date picker components on room detail pages
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Image Management**: Upload and display room images
- **REST API**: Full CRUD operations for rooms and bookings
- **User Authentication UI**: Login and sign-up pages with form validation
- **Find My Booking**: Search for existing bookings by email
- **About & Info Pages**: About, Features, and How It Works pages
- **Custom Date Picker**: Custom-built booking date filter component
- **Time Selection**: Interactive time slot selection for bookings (30-minute intervals)

### In Progress
- Backend integration for booking submission
- Date-based availability filtering (frontend-backend integration)
- Location services integration
- User authentication backend integration

## Overview

This application provides a streamlined interface for browsing and booking coworking spaces. Users can search and filter through available rooms, view detailed information with tags (like High-Speed WiFi, Meeting Rooms, Quiet Zones), and make reservations. The system features a responsive React/Next.js frontend communicating with a Django REST API backend.

The application includes informational pages (About, Features, How It Works), user authentication interfaces (login and sign-up), a find-my-booking search page, and interactive booking components with date and time selection for making reservations.

### Recent Updates

**Booking Interface Enhancements**
- Implemented complete booking UI on room detail pages with date and time selection
- Added BookingSection component that combines date picker and time slot selection
- Time slots available in 30-minute intervals with configurable hours
- Sticky positioning for booking section on room detail pages

**New Pages Added**
- `/sign-up` - User registration with password matching validation
- `/find-my-booking` - Email-based booking search interface

**Component Improvements**
- Renamed Header component to Navbar for better clarity
- Refactored booking components for better state management
- Added TypeScript interfaces for all booking-related props
- Improved mobile responsiveness across all pages
- Enhanced date filter with availability display on main search page

**UI/UX Enhancements**
- Better visual feedback for selected dates and times
- Improved form validation on authentication pages
- Enhanced transitions and hover effects throughout the app
- Sticky navbar with scroll-based styling

## Tech Stack

### Frontend (`/client`)
- **Next.js** 16.0.7 with App Router
- **React** 19.2.1
- **TypeScript** 5.9.3
- **Tailwind CSS** 4.1.17
- **Lucide React** 0.555.0 - Icon library
- **Bun** - JavaScript runtime & package manager

### Backend (`/server`)
- **Django** 5.2.8
- **Django REST Framework** 3.16.1
- **Python** 3.13+
- **SQLite** - Database (default)
- **Pillow** 12.0.0 - Image processing
- **django-cors-headers** 4.9.0 - CORS support
- **Poetry** 2.0+ - Dependency management

## Project Structure

```
booking-system-test/
├── client/                       # Next.js frontend
│   ├── app/                      # App router pages
│   │   ├── (admin)/              # Admin route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx      # Admin login page
│   │   │   └── sign-up/
│   │   │       └── page.tsx      # Admin sign-up page
│   │   ├── (booking)/            # Booking route group with shared layout
│   │   │   ├── about/
│   │   │   │   └── page.tsx      # About page
│   │   │   ├── features/
│   │   │   │   └── page.tsx      # Features page
│   │   │   ├── find-my-booking/
│   │   │   │   └── page.tsx      # Find booking page
│   │   │   ├── how-it-works/
│   │   │   │   └── page.tsx      # How it works page
│   │   │   ├── rooms/
│   │   │   │   └── [room_id]/
│   │   │   │       └── page.tsx  # Dynamic room details page
│   │   │   ├── layout.tsx        # Booking pages shared layout
│   │   │   └── page.tsx          # Main landing/search page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── favicon.ico           # Site favicon
│   │   └── not-found.tsx         # 404 page
│   ├── components/               # React components
│   │   ├── BookingDateFilter.tsx # Custom booking calendar picker
│   │   ├── BookingSection.tsx    # Booking section container (date + time)
│   │   ├── BookingTimeCard.tsx   # Time slot selection component
│   │   ├── CallToAction.tsx      # CTA component
│   │   ├── DateFilter.tsx        # Date availability filter
│   │   ├── FilterSection.tsx     # Tag filter UI
│   │   ├── Navbar.tsx            # Site navigation bar
│   │   ├── RoomCard.tsx          # Room display card with booking link
│   │   ├── SearchBar.tsx         # Real-time search
│   │   ├── SpacesAvailable.tsx   # Room grid with filtering logic
│   │   └── TagsList.tsx          # Tags display component
│   ├── lib/                      # Utilities and types
│   │   ├── types.ts              # TypeScript interfaces
│   │   └── constants.ts          # API endpoints & config
│   ├── utils/                    # Utility functions
│   │   └── date-utils.ts         # Date manipulation helpers
│   └── public/                   # Static assets
│       └── assets/images/        # Image assets
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
│   ├── testimages/               # Sample images for testing (9 sample images)
│   ├── manage.py                 # Django management CLI
│   ├── pyproject.toml            # Poetry dependencies
│   ├── poetry.lock               # Poetry lock file
│   ├── nuke.sh                   # Database reset and seed script
│   └── test-upload.sh            # Test data upload script
│
├── assets/                       # Project documentation assets
│   ├── IndividualRoomPage.png    # Screenshot of room detail page
│   └── RoomCards.png             # Screenshot of main page
├── .prettierrc                   # Prettier configuration
└── README.md                     # This file
```

## Prerequisites

- **Node.js** 20.x or higher
- **Bun** (recommended, or npm/yarn/pnpm)
- **Python** 3.13 or higher
- **Poetry** 2.0+

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

**Available Pages:**
- `/` - Main search and browse page with room filtering
- `/rooms/[id]` - Individual room detail page with booking interface
- `/about` - About Bloom page with mission, values, and team info
- `/features` - Features page (to be implemented)
- `/how-it-works` - How it works page (to be implemented)
- `/find-my-booking` - Search for existing bookings by email
- `/login` - User login page with authentication UI
- `/sign-up` - User registration page with password validation

### 3. (Optional) Seed Data

#### Quick Reset & Populate with Scripts

The server directory includes utility scripts for quickly resetting and populating the database:

**One-Step Reset & Seed (`nuke.sh`)**

```bash
cd server
./nuke.sh
```

This script will:
- Delete the SQLite database
- Remove all migration files and room images
- Create fresh migrations for rooms and bookings apps
- Run migrations
- Create a superuser (username: `admin`, password: `admin`)
- Start the Django server automatically
- Populate the database with 9 sample rooms (with images and random tags)
- Stop the server when complete

**Manual Test Data Upload (`test-upload.sh`)**

Alternatively, start the server and manually populate it with sample rooms:

```bash
# In terminal 1: Start the server
cd server
poetry run python manage.py runserver

# In terminal 2: Upload test data
cd server
./test-upload.sh
```

This will create 9 sample rooms with images from `testimages/` and random tags. Requires the server to be running and uses the admin credentials.

**Alternative: Manual Data Entry**

You can also populate the database using the Django admin interface at `http://localhost:8000/admin`.

## API Integration

The frontend communicates with the backend through the configured API base URL (`http://localhost:8000` by default). This can be customized via the `NEXT_PUBLIC_API_URL` environment variable in the client.

Key API integration points:
- Room fetching on homepage: `client/app/(booking)/page.tsx`
- Room detail fetching: `client/app/(booking)/rooms/[room_id]/page.tsx`
- Booking search: `client/app/(booking)/find-my-booking/page.tsx`
- API constants: `client/lib/constants.ts`
- TypeScript types and interfaces: `client/lib/types.ts`

### CORS Configuration

The backend is configured to accept requests from `http://localhost:3000` by default (`server/server/settings.py`). Additional origins can be added to the `CORS_ALLOWED_ORIGINS` list in the settings file.

## Key Components

### Booking Components
The application features a comprehensive booking interface with the following components:

**BookingSection** (`client/components/BookingSection.tsx`)
- Container component that manages booking state (date and time selection)
- Renders both BookingDateFilter and BookingTimeCard
- Uses sticky positioning on room detail pages for persistent visibility

**BookingDateFilter** (`client/components/BookingDateFilter.tsx`)
- Interactive calendar component for date selection
- Month navigation with previous/next controls
- Highlights current date and selected date
- Displays all days of the month in a grid layout

**BookingTimeCard** (`client/components/BookingTimeCard.tsx`)
- Time slot selection in 30-minute intervals
- Configurable start and end times (default 8:00 AM - 7:00 PM)
- Visual feedback for selected time slot
- Clear button to reset selection

**DateFilter** (`client/components/DateFilter.tsx`)
- Date availability filter on the main search page
- Modal-based date picker with overlay
- Integrated with room filtering system

**Navbar** (`client/components/Navbar.tsx`)
- Responsive navigation with mobile menu
- Sticky header with scroll-based styling
- Links to main pages and authentication
- "Find My Booking" quick access

### Search & Filter Components

**SearchBar** (`client/components/SearchBar.tsx`)
- Real-time search input with clear functionality
- Searches room names and descriptions

**FilterSection** (`client/components/FilterSection.tsx`)
- Tag-based filtering with toggleable chips
- Supports multiple tag selection

**SpacesAvailable** (`client/components/SpacesAvailable.tsx`)
- Grid display of filtered rooms
- Combines search term and tag filtering
- Responsive card layout

## Architecture

### Frontend Architecture
- **Next.js 16** with App Router for file-based routing
- **Route Groups** for organizing pages:
  - `(booking)` - Main booking flow pages with shared layout and navbar (home, rooms, about, features, how-it-works, find-my-booking)
  - `(admin)` - User authentication pages (login, sign-up)
- **Server Components** for initial data fetching on room detail pages
- **Client Components** for interactive features (search, filtering, date/time pickers, forms)
- **TypeScript** for type safety across the application with comprehensive interface definitions
- **Tailwind CSS** for responsive utility-first styling with custom theme colors (bloom-orbit, bloom-blue)
- **Lucide React** for consistent iconography
- **Custom Components** including:
  - **BookingDateFilter** - Interactive calendar for selecting booking dates
  - **BookingTimeCard** - Time slot selection in 30-minute intervals
  - **BookingSection** - Combined date and time selection interface
  - **DateFilter** - Date availability filter for the main search page
  - **Navbar** - Responsive navigation with mobile menu

### Backend Architecture
- **Django REST Framework** ViewSets for RESTful API endpoints
- **Model-Serializer-ViewSet** pattern for clean separation of concerns
- **SQLite** database for development (easily swappable for production databases)
- **Token Authentication** ready via DRF (currently allowing unauthenticated reads)
- **CORS middleware** for secure cross-origin requests
- **Media file handling** for room image uploads

### Data Models

**Rooms** (`server/rooms/models.py`)
- `name` - Room name (max 30 chars)
- `excerpt` - Short description (max 100 chars)
- `description` - Full description (max 500 chars)
- `image` - Room image upload
- `good_for` - Category label (max 20 chars)
- `capacity` - Maximum number of guests
- `created_at` / `updated_at` - Timestamps

**RoomType** (`server/rooms/models.py`)
- `type` - Room type name (max 20 chars)
- `room` - One-to-one relationship with Rooms

**TagItem** (`server/rooms/models.py`)
- `tag` - Feature tag name (max 20 chars, e.g., "High-Speed Wifi", "Pet Friendly")
- `room` - Foreign key to Rooms (many-to-one relationship)

**Bookings** (`server/bookings/models.py`)
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

### Theme & Styling

The frontend uses a custom color palette defined in `client/app/globals.css`:
- **Primary Colors**: `bloom-orbit` (#2332ff), `bloom-blue` (#67d4ec)
- **Accent Colors**: `bloom-red` (#be1b3b), `bloom-yellow` (#f3d03a)
- **Neutral**: `bloom-gray` (#e5e1e6)
- Each color has a light variant for UI variations

Custom heading styles (h1-h5) are defined globally using Tailwind's `@layer utilities`.

## Media Files

Room images are uploaded to `server/rooms-images/` and served at `/rooms-images/` in development mode via Django's media file handling (`server/server/settings.py`). The directory is gitignored to avoid committing uploaded files. Sample images for testing are available in `server/testimages/` (9 sample images included).

## Database

The project uses SQLite by default (`server/db.sqlite3`). For production, consider migrating to PostgreSQL or another robust database system by updating the `DATABASES` setting in `server/server/settings.py`.

## Utility Scripts

### Database Reset & Seed (`server/nuke.sh`)
One-step script that completely resets and populates the development database:
- Deletes `db.sqlite3`
- Removes all migration files (except `__init__.py`)
- Removes all room images from `rooms-images/`
- Creates fresh migrations for both rooms and bookings apps
- Applies migrations
- Creates a superuser with credentials: `admin` / `admin`
- Starts the Django server
- Uploads 9 sample rooms with images from `testimages/`
- Stops the server when complete

**Usage:**
```bash
cd server
./nuke.sh
```

### Test Data Upload Only (`server/test-upload.sh`)
Populates the database with sample rooms without resetting:
- Uploads 9 sample rooms with images from `server/testimages/`
- Assigns random tags and room types
- Requires the Django server to be running
- Uses admin authentication (admin/admin)

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
- Booking submission needs backend integration (UI complete with date and time selection)
- Find My Booking search needs backend endpoint integration
- Date filter components need integration with backend availability endpoint
- Location services placeholder on room detail pages
- User authentication (login/sign-up) needs backend API integration
- Image optimization could be improved
- Features and How It Works pages need content implementation

### Backend
- Date-based availability endpoint (`/rooms/free-on/`) implemented but needs booking conflict logic
- Authentication is configured but not enforced on most endpoints
- No pagination on list endpoints yet
- SECRET_KEY should be moved to environment variables for production

### Potential Enhancements
- Complete user authentication backend and session management
- Booking confirmation emails and notifications
- Advanced booking management (edit, view history, cancel with reasons)
- Room availability calendar view with real-time updates
- Payment integration for booking deposits
- Reviews and ratings system
- Admin dashboard for managing rooms and bookings
- User profiles and preferences
- Unit and integration tests
- Booking conflict prevention and validation logic
- Multi-language support

## Contributing

This is a test project built by volunteers for learning and experimentation. Contributions, feedback, and suggestions are welcome!

**Repository**: [https://github.com/Fozzyack/booking-system-test](https://github.com/Fozzyack/booking-system-test)

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational and testing purposes.

## Acknowledgments

- Built by volunteers at **Coders for Causes**
- Designed for community workspace booking needs
- Powered by open-source technologies


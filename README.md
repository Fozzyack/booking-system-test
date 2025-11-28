# Coworking Space Booking System

A modern, full-stack booking system for coworking spaces, built with Next.js and Django.

## Just for Testing

This is a test project to explore and experiment with various features. It is not a full-fledged production application.

## Overview

This application allows users to browse, book, and manage coworking space reservations. It features a responsive frontend built with React and Next.js, backed by a robust Django REST API.

## Tech Stack

### Frontend (Client)
- **Framework**: Next.js 16.0.5
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript 5

### Backend (Server)
- **Framework**: Django 5.2.8
- **API**: Django REST Framework 3.16.1
- **Language**: Python 3.14+
- **Package Manager**: Poetry

## Project Structure

```
bloom-test/
├── client/              # Next.js frontend application
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── public/         # Static assets
├── server/             # Django backend application
└── README.md          # This file
```

## Prerequisites

- **Node.js**: 20.x or higher
- **Bun**: Latest version (or npm/yarn as alternative)
- **Python**: 3.14 or higher
- **Poetry**: Latest version

## Getting Started

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies using Poetry:
   ```bash
   poetry install
   ```

3. Activate the virtual environment:
   ```bash
   poetry shell
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

The backend API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

The frontend application will be available at `http://localhost:3000`

## Development

### Frontend Development

- **Development**: `bun dev` - Start the Next.js development server
- **Build**: `bun build` - Create a production build
- **Start**: `bun start` - Start the production server
- **Lint**: `bun lint` - Run ESLint

### Backend Development

- Run the Django development server with auto-reload enabled
- Access the Django admin panel (after creating a superuser) at `http://localhost:8000/admin`
- API endpoints will be available at `http://localhost:8000/api/`

## Features

- Browse available coworking spaces
- Book desks, meeting rooms, and private offices
- Manage bookings and reservations
- Admin User authentication and profiles
- Real-time availability updates
- Responsive design for mobile and desktop



# Book Buddy

Book Buddy is a full-stack reading tracker application that helps users manage their personal library, track reading progress, and organize books based on their reading status.

## Features

* Add new books to the library
* View all books in the collection
* Categorize books as Reading, Completed, or Wishlist
* Update reading status dynamically
* Add personal notes for books

## Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Axios

### Backend

* FastAPI
* Python

### Database

* SQLite

### ORM

* SQLAlchemy

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd BookBuddy
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn sqlalchemy
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will run on:

```text
http://127.0.0.1:8000
```

### 3. Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

## How It Works

1. Users add book details through the React interface.
2. Requests are sent to the FastAPI backend.
3. SQLAlchemy manages database operations.
4. Data is stored in SQLite and displayed on the frontend.

## Future Enhancements

* User Authentication
* Search and Filter Functionality
* Reading Goals and Achievements
* Book Cover Upload Feature
* Personalized Book Recommendations

## Author

Sherin Paulose

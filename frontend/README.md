# Book Buddy

## Overview

Book Buddy is a full-stack reading tracker application that allows users to manage their books, track reading progress, add notes and ratings, and view reading statistics.

## Features

* Add books
* Track reading progress
* Manage reading status (Reading, Completed, Wishlist)
* Add notes and ratings
* View reading statistics

## Tech Stack

### Frontend

* ReactJS
* Axios

### Backend

* FastAPI
* SQLAlchemy

### Database

* SQLite

## Setup

### Backend

cd backend

python -m venv venv

venv\Scripts\activate

pip install fastapi uvicorn sqlalchemy

uvicorn main:app --reload

### Frontend

cd frontend

npm install

npm start

## Future Enhancements

* User Authentication
* AI Book Recommendations
* ISBN API Integration
* Reading Analytics Graphs

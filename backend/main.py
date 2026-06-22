from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, SessionLocal
from models import Base, Book
from schemas import BookCreate

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Book Buddy API Running"}


@app.post("/books")
def add_book(book: BookCreate):
    db = SessionLocal()

    new_book = Book(
        title=book.title,
        author=book.author,
        genre=book.genre,
        status=book.status,
        total_pages=book.total_pages,
        current_page=book.current_page,
        notes=book.notes,
        rating=book.rating
    )

    db.add(new_book)
    db.commit()

    return {"message": "Book Added Successfully"}


@app.get("/books")
def get_books():
    db = SessionLocal()
    books = db.query(Book).all()
    return books
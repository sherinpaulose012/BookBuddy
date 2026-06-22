from pydantic import BaseModel

class BookCreate(BaseModel):
    title: str
    author: str
    genre: str
    status: str
    total_pages: int
    current_page: int
    notes: str = ""
    rating: float= 0